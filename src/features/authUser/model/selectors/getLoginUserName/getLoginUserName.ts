import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getLoginUsername = (state: StateShema) => state?.loginForm?.username || '';
