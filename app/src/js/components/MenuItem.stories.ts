import { Story, Meta } from "@storybook/html";
import { createMenuItem, MenuItemProps } from "./MenuItem";

export default {
  title: "Components/MenuItem",

  argTypes: {
    label: { control: "text" },
    iconName: {
      control: { type: "select" },
      options: [
        "logo",
        "home",
        "explore",
        "notifications",
        "messages",
        "bookmarks",
        "lists",
        "profile",
        "more",
      ],
    },
    linkURL: { control: "text" },
    dark: { control: "boolean" },
    selected: { control: "boolean" },
  },
} as Meta;

const Template: Story<MenuItemProps> = (args: any) => {
  return createMenuItem(args);
};

export const menuItem = Template.bind({});
menuItem.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
};

export const menuItemDark = Template.bind({});
menuItemDark.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
  dark: true,
};

export const menuItemSelected = Template.bind({});
menuItemSelected.args = {
  label: "Home",
  iconName: "home",
  linkURL: "/404.html",
  selected: true,
};
