import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateShema } from './StateShema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/authUser/model/slice/LoginSlice';

export function createReduxStore(initialState?: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer  
    };

    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV,
        preloadedState: initialState,
    });
}
