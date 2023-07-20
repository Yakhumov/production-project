import { Story } from '@storybook/react';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/ThemeProviders/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateShema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
