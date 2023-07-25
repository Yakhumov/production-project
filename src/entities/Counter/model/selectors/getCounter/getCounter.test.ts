import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema"
import { getCounter } from "./getCounter"

describe('get counter', () =>{
    test('return counter value', ()=>{
        const state: DeepPartial<StateShema> ={
            counter: {value : 10}
        }
        expect(getCounter(state as StateShema)).toEqual({value: 10})  
    })
})