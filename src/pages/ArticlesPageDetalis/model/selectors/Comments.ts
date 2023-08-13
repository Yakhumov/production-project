import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const CommentsIsLoading = (state: StateShema) => state.articleDetailsPage?.comments.isLoading
export const CommentsIsError = (state: StateShema) => state.articleDetailsPage?.comments.error
