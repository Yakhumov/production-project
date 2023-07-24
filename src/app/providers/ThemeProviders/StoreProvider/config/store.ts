import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateShema } from './StateShema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateShema,  asyncReducers?: ReducersMapObject<StateShema>,) {


    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store  = configureStore<StateShema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV,
        preloadedState: initialState,
    });

      // @ts-ignore
      store.reducerManager = reducerManager;

    return store
}
