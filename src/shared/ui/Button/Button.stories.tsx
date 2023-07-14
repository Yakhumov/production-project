import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders'
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};


export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};


export const Background_inverted = Template.bind({});
Background_inverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true
};

export const ButtonSize_L = Template.bind({});
ButtonSize_L.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true
};


export const ButtonSize_XL = Template.bind({});
ButtonSize_XL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true  
};



OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];





