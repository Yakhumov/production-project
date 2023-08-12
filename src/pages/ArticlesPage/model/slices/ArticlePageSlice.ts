import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { Article } from 'entities/Article';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { ArticlePageShema } from '../types/ArticlesPageShema';
import { LOCALSTORAGE_ARTICLE_PAGE_KEY } from 'shared/consts/LocalStorageUser';
import { fetchArticles } from '../services/fetchArticles';
import { SortOrder } from 'shared/types';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateShema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageShema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false ,
        sort: ArticleSortField.CREATED,
        search: '',
        limit: 9,
        order: 'asc',
        type: ArticleType.ALL
        
    
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCALSTORAGE_ARTICLE_PAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },

        initState: (state) => {
            const view = localStorage.getItem(LOCALSTORAGE_ARTICLE_PAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state,action) => {
                state.error = undefined;
                state.isLoading = true;

                if(action.meta.arg.replace){
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > state.limit

                if(action.meta.arg.replace){
                    articlesAdapter.setAll(state, action.payload);
                }else{
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
