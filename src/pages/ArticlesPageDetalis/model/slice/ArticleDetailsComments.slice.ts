import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { fetchCommentsByArticleId } from '../services/fetchCommentArticleById/fetchCommentArticleById';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsShema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateShema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),  
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
