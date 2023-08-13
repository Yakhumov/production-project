import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getArticleRecommendationsIsLoading = (state: StateShema) => {
    return state.articleDetailsPage?.recommendations.isLoading
};

export const getArticleRecommendationsError = (state: StateShema) => {
    return state.articleDetailsPage?.recommendations.error
};