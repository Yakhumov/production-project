import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecommendationsListSchema } from '../types/articleRecommendationsListSchema';

const initialState: ArticleRecommendationsListSchema = {
    
};

export const articleRecommendationsListSlice = createSlice({
    name: 'articleRecommendationsList',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articleRecommendationsListActions } = articleRecommendationsListSlice;
export const { reducer: articleRecommendationsListReducer } = articleRecommendationsListSlice;