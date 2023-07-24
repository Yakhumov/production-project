import { DeepPartial } from "@reduxjs/toolkit"
import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getError } from "./getError"

describe('getError', ()=>{
    test('error', ()=>{
        const state: DeepPartial<StateShema> = {
            loginForm: {
                error: 'error' 
            }
        }
        expect(getError(state as StateShema)).toEqual('error')
    })


    test('error', ()=>{
        const state: DeepPartial<StateShema> = {}
        expect(getError(state as StateShema)).toEqual(undefined)   
    })
}) 