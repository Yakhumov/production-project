import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator"
import { Theme } from 'app/providers/ThemeProviders'     
import { NotfoundPage } from './NotfoundPage';

export default {
    title: 'pages/NotfoundPage ',
    component: NotfoundPage ,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotfoundPage >;

const Template: ComponentStory<typeof NotfoundPage > = (args) => <NotfoundPage  {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; 

