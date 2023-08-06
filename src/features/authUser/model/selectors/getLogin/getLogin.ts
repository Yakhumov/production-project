import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getLogin = (state: StateShema) => state?.loginForm;
export const getAuthData = (state: StateShema) => state.user.authData    

