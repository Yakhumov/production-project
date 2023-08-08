import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { fetchArticles } from '../services/fetchArticles';
import { Article } from 'entities/Article';
import { ArticlePageShema } from '../types/ArticlesPageShema';
import { ArticleView } from 'entities/Article/model/types/article';
import { LOCALSTORAGE_ARTICLE_PAGE_KEY } from 'shared/consts/LocalStorageUser';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticle = articlesAdapter.getSelectors<StateShema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),  
);

const articleSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageShema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true 
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCALSTORAGE_ARTICLE_PAGE_KEY, action.payload);
        },
        setPage:(state,action: PayloadAction<number>)=>{
            state.page =action.payload
        },
        initState: (state) => {
            state.view = localStorage.getItem(LOCALSTORAGE_ARTICLE_PAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer } = articleSlice; 
export const {actions: articlesPageActions} = articleSlice
