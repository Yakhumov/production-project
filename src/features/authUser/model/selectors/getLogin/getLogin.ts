import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";

export const getLogin = (state: StateShema) => state?.loginForm;
export const getAuthData = (state: StateShema) => state.user.authData    


function getAuthDatas(add: any){
    let res = []
   for(let i =0 ; i < add.length; i++){
      if(add[i] % 2 === 0){
        res.push(add[i])
      }
   }
   return res 
}