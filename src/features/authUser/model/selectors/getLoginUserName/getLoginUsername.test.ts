import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getLoginUsername } from "./getLoginUserName"

describe('getLoginUsername', ()=>{
    test('error', ()=>{
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '34',
                isLoading: true,
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