import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getLoginPassword = (state: StateShema) => state?.loginForm?.password || ''