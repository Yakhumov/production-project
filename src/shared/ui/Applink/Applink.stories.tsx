import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator"
import { Theme } from 'app/providers/ThemeProviders'     
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'widget/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "text",
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "text",
    theme: AppLinkTheme.SECONDARY
};


export const PrimaryDark = Template.bind({});
Primary.args = {
    children: "text",
    theme: AppLinkTheme.PRIMARY
};




PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]       

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "text",
    theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];








