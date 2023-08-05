import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator"
import { Theme } from 'app/providers/ThemeProviders'     
import { ArticlesPage } from '..';

export default {
    title: 'pages/ ArticlesPage',
    component:  ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof  ArticlesPage> = (args) => <ArticlesPage />;       

export const Normal = Template.bind({});
Normal.args = {};          

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; 
