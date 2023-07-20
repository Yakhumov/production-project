
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginForm } from "./loginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {username: 'admin', password: '123'}
})] 


export const Error = Template.bind({});
Error.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {username: 'admin', password: '123', error: 'error'}
})]   


export const Loading = Template.bind({});
Loading.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {isLoading: true}
})]     