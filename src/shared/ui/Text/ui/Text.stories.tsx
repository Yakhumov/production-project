import { Text } from "./Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleText = Template.bind({});
TitleText.args = {
  title: "title",
  text: "mdfvjn",
};

export const Title = Template.bind({});
Title.args = {
  title: "title",
};

export const text = Template.bind({});
text.args = {
  text: "mdfvjn",
};

export const PrimaryTextTheme = Template.bind({});
PrimaryTextTheme.args = {
  text: "mdfvjn",
  theme: TextTheme.PRIMARY,
};

export const ErrorTextTheme = Template.bind({});
ErrorTextTheme.args = {
  text: "mdfvjn",
  theme: TextTheme.ERROR,
};
