import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import { createReduxStore } from '../config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider = (props: StoreProviderProps) => {  
    const {
        children,
        initialState,
        asyncReducers
    } = props;

    const store = createReduxStore(
        initialState as StateShema,
        asyncReducers as ReducersMapObject<StateShema>,    
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>         
    );
};

