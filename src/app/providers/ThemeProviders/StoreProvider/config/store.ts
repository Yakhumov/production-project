import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/Api';
import { ThunkExtraArg } from './StateShema';
import { CombinedState, Reducer } from 'redux';
import { StateShema } from './StateShema';
import { createReducerManager } from './reducerManager';
import { UIReducer } from 'features/ui/model/slices/uiScrollSlice';
import { rtkApi } from 'shared/api/RtkApi';

export function createReduxStore(
    initialState?: StateShema,
    asyncReducers?: ReducersMapObject<StateShema>,
) {
    const rootReducers: ReducersMapObject<StateShema> = {
        ...asyncReducers, 
        counter: counterReducer,
        user: userReducer,
        ui: UIReducer,
        [rtkApi.reducerPath]: rtkApi.reducer, 
    
 
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateShema>>,
        devTools: __IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware)
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

