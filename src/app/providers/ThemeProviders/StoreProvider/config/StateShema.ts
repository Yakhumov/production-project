import { CounterShema } from "entities/Counter";
import { userShema } from "entities/User/model/types/user";
import { LoginShema } from "features/authUser/model/types/LoginShema";
import { CombinedState } from 'redux';
import { ReducersMapObject, AnyAction, Reducer , EnhancedStore} from "@reduxjs/toolkit";


export interface StateShema {
    counter: CounterShema  
    user: userShema,

    
    loginForm?: LoginShema
}


export type StateSchemaKey = keyof StateShema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager;
}