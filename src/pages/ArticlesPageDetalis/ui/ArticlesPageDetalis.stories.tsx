import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator"
import { Theme } from 'app/providers/ThemeProviders'     
import  {ArticlesPageDetalis}  from '..';

export default {
    title: 'pages/ ArticlesPageDetalis',
    component:  ArticlesPageDetalis,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageDetalis>;

const Template: ComponentStory<typeof  ArticlesPageDetalis> = (args) => <ArticlesPageDetalis />;       

export const Normal = Template.bind({});
Normal.args = {};          

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; 

