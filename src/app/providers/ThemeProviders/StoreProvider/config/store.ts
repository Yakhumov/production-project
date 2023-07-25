import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateShema } from "./StateShema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { ProfileReducer } from "entities/Profile/model/slice/ProfileSlice";
import { $api } from "shared/api/Api";
import { To } from "react-router-dom";
import { NavigateOptions } from "react-router-dom";
import { ThunkExtraArg } from "./StateShema";

export function createReduxStore(
  initialState?: StateShema,
  asyncReducers?: ReducersMapObject<StateShema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateShema> = {
    counter: counterReducer,
    user: userReducer,
    profile: ProfileReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

   const extraArg: ThunkExtraArg  = {
    api:$api,
    navigate
   }

  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateShema>,
    devTools: __IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddlware) => 
      getDefaultMiddlware({
        thunk: {
          extraArgument: extraArg
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
