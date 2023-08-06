import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/Api';
import { ThunkExtraArg } from './StateShema';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { CombinedState, Reducer } from 'redux';
import { StateShema } from './StateShema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateShema,
    asyncReducers?: ReducersMapObject<StateShema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateShema> = {
        ...asyncReducers, 
        counter: counterReducer,
        user: userReducer,
    
 
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateShema>>,
        devTools: __IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

