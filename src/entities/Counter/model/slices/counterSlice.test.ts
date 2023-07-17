import { CounterShema } from "../types/CounterShema"
import { counterActions, counterReducer } from "./CounterSlice"

describe('counterSlice', ()=>{
    test('decrement', ()=>{
        const state: CounterShema = {value: 10}
        expect(counterReducer(state, counterActions.decrement)).toEqual({value: 9})
    })
}) 


describe('counterSlice', ()=>{
    test('increment', ()=>{
        const state: CounterShema = {value: 10}
        expect(counterReducer(state, counterActions.increment)).toEqual({value: 11})  
    })
})

describe('counterSlice', ()=>{
    test('undefined', ()=>{
       
        expect(counterReducer(undefined, counterActions.increment)).toEqual({value: 1})  
    })
})