import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { getArticlePageInited } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/ArticlePageSlice';
import { fetchArticles } from './fetchArticles';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlePageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticles({
                    page: 1,
                }));
            }
        },
    );
