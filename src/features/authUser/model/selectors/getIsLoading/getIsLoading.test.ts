import { DeepPartial } from "@reduxjs/toolkit"
import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getIsLoading } from "./getIsLoading"

describe('getIsLoading', ()=>{
    test('error', ()=>{
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true 
            }
        }
        expect(getIsLoading(state as StateShema)).toEqual(true)
    })


    test('isLoading', ()=>{
        const state: DeepPartial<StateShema> = {}
        expect(getIsLoading(state as StateShema)).toEqual(false)   
    })
}) 