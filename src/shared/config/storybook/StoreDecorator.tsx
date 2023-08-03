import { Story } from '@storybook/react';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { StoreProvider } from 'app/providers/ThemeProviders/StoreProvider';
import { loginReducer } from 'features/authUser'; 
import { ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { ProfileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';


const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer, 
    profile: ProfileReducer,
    articleDetails: articleDetailsReducer 
};



export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?:ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
