import { Story, Meta } from "@storybook/html";
import { createHeader, HeaderProps } from "./Header";

export default {
  title: "Components/Header",

  argTypes: {
    label: { control: "text" },
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args: any) => {
  return createHeader(args);
};

export const headerLigth = Template.bind({});
headerLigth.args = {
  label: "Home",
  dark: false,
};

export const headerDark = Template.bind({});
headerDark.args = {
  label: "Home",
  dark: true,
};
