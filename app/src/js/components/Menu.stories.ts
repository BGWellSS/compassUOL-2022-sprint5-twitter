import { Story, Meta } from "@storybook/html";
import { createMenu, MenuProps } from "./Menu";

export default {
  title: "Components/Menu",

  argTypes: {
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<MenuProps> = (args: any) => {
  return createMenu(args);
};

export const menu = Template.bind({});
menu.args = {};

export const menuDark = Template.bind({});
menuDark.args = {
  dark: true,
};
