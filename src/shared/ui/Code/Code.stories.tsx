import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/Card',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />; 

export const Normal = Template.bind({});
Normal.args = {
   text: 'text'
};
