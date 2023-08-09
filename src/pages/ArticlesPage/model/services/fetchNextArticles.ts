import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { getArticlePageIsLoading } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/ArticlePageSlice';
import { getArticlePage } from '../selectors/articlesPageSelectors';
import { fetchArticles } from './fetchArticles';
import { getArticlePageHasmore } from '../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlePageHasmore(getState()); 
            const page = getArticlePage(getState());
            const isLoading = getArticlePageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticles({
                    page: page + 1,
                }));
            }
        },
    );
