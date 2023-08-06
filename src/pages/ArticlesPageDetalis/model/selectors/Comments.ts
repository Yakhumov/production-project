import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const CommentsIsLoading = (state: StateShema) => state.articleDetailsComments?.isLoading
export const CommentsIsError = (state: StateShema) => state.articleDetailsComments?.error 
