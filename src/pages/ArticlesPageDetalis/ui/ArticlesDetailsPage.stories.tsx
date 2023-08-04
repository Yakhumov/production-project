import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator"
import { Theme } from 'app/providers/ThemeProviders'     
import  {ArticlesPageDetails}  from '..';

export default {
    title: 'pages/ ArticlesPageDetalis',
    component:  ArticlesPageDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageDetails>;

const Template: ComponentStory<typeof  ArticlesPageDetails> = (args) => <ArticlesPageDetails />;       

export const Normal = Template.bind({});
Normal.args = {};          

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; 

