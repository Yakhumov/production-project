import { DeepPartial } from "@reduxjs/toolkit"
import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getLoginUsername } from "./getLoginUserName"

describe('getLoginUsername', ()=>{
    test('error', ()=>{
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: 'user'
            }
        }
        expect(getLoginUsername(state as StateShema)).toEqual('user')
    })


    test('username', ()=>{
        const state: DeepPartial<StateShema> = {}
        expect(getLoginUsername(state as StateShema)).toEqual('')     
    })
}) 