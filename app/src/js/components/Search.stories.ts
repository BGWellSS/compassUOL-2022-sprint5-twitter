import { Story, Meta } from "@storybook/html";
import { createSearch, SearchProps } from "./Search.js";

export default {
  title: "Components/Search",

  argTypes: {
    placeholder: { control: "text" },
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<SearchProps> = (args: any) => {
  return createSearch(args);
};

export const searchLigth = Template.bind({});
searchLigth.args = {
  placeholder: "Search Twitter",
  dark: false,
};

export const searchDark = Template.bind({});
searchDark.args = {
  placeholder: "Search Twitter",
  dark: true,
};
