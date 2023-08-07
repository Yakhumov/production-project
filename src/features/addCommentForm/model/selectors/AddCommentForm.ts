import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const  AddCommentFormText = (state: StateShema) => state.addCommentForm?.text
export const  AddCommentFormError = (state: StateShema) => state.addCommentForm?.error
