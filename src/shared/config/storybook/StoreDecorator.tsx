import { Story } from '@storybook/react';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { StoreProvider } from 'app/providers/ThemeProviders/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/authUser'; 
import { ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';


const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer, 
};



export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?:ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
