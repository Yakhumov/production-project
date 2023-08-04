import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getArticleDetailsData = (state: StateShema) => state?.articleDetails?.data;

export const getArticleDetailsIsLoading = (state: StateShema) => state?.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateShema) => state?.articleDetails?.error;

