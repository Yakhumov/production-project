import { Story } from '@storybook/react';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/ThemeProviders/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/authUser'; 


const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer, 
};



export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
