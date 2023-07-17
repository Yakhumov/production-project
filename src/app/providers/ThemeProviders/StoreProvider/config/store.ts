import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter/model/slices/CounterSlice';

export function createReduxStore(initialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: {
            counter: counterReducer 
        },
        devTools: __IS_DEV,
        preloadedState: initialState,
    });
}
