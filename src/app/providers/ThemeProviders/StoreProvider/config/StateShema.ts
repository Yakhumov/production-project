
import { CounterShema } from "entities/Counter";
import { userShema } from "entities/User/model/types/user";
import { LoginShema } from "features/authUser";
import { CombinedState } from 'redux';
import { ReducersMapObject, AnyAction, Reducer , EnhancedStore} from "@reduxjs/toolkit";
import { ProfileShema } from "entities/Profile";
import { NavigateOptions } from "react-router-dom";
import { AxiosInstance } from "axios";
import { To } from "react-router-dom";
import { ArticlesDetailsSchema } from "entities/Article";      
import { ArticleDetailsCommentsSchema } from "pages/ArticlesPageDetalis";
import { AddCommentFormShema } from "features/addCommentForm/model/types/AddCommentForm";
import { ArticlePageShema } from "pages/ArticlesPage";
import { UiShema } from "features/ui/model/types/ui";

export interface StateShema {          
    counter: CounterShema;
    user: userShema;
    ui: UiShema

    //async
    loginForm?: LoginShema;
    profile?: ProfileShema;
    articleDetails?: ArticlesDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormShema
    articlesPage?: ArticlePageShema
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

export interface ThunkExtraArg {
    api: AxiosInstance;    
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateShema;
    
}
