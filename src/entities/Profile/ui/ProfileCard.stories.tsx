import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard >;

const Template: ComponentStory<typeof ProfileCard > = (args) => <ProfileCard  />;

export const Data = Template.bind({});
Data.args = {
    data:{
        first: 'Jahar',
        lastname: 'Yakumov',
        age: 27,
        city: "Grozny",
        country: Country.Russia,
        currency: Currency.RUB
        
    }
};

export const Error  = Template.bind({});
Error.args = {
    error: 'error'
};

export const isLoading  = Template.bind({});
isLoading.args = {
    isLoading: true 
};

