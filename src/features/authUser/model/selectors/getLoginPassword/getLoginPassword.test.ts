
import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getLoginPassword } from "./getLoginPassword"

describe('getLoginPassword', ()=>{
    test('error', ()=>{
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateShema)).toEqual('123')
    })


    test('password', ()=>{
        const state: DeepPartial<StateShema> = {}
        expect(getLoginPassword(state as StateShema)).toEqual('')   
    })
}) 