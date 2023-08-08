import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { Article } from 'entities/Article';
import { Comment } from 'entities/Comment/model/types/comments';
import { useSelector } from 'react-redux';
import { getArticlePage, getArticlePageLimit } from '../selectors/articlesPageSelectors';


export interface fetchArticlesProps{
    page?: number
}

export const fetchArticles = createAsyncThunk<
    Article[],
    fetchArticlesProps, 
    ThunkConfig<string>
    >(
        'articles/fetchArticles',
        async ( props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi; 
            const {page =1 } = props 

        
            const limit = getArticlePageLimit(getState()) 

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user', 
                        _page: page,
                        _limit: limit
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
