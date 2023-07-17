import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import { createReduxStore } from '../config/store';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
}

export const StoreProvider = (props: StoreProviderProps) => {  
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateShema);

    return (
        <Provider store={store}>
            {children}
        </Provider>         
    );
};

