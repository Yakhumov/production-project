import { createSelector } from "@reduxjs/toolkit";
import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";
import { UseRoles } from "../../types/user";

export const getUserRole = (state: StateShema)=> state.user.authData?.roles

 export const isUserAdmin = createSelector(getUserRole,(roles)=> Boolean(roles?.includes(UseRoles.ADMIN)))
export  const isUserManager = createSelector(getUserRole,(roles)=> Boolean(roles?.includes(UseRoles.MANAGER))) 
