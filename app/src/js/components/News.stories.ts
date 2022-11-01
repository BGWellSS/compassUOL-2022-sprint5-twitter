import { Story, Meta } from "@storybook/html";
import { createNews, NewsProps } from "./News";

export default {
  title: "Components/News Section",

  argTypes: {
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<NewsProps> = (args: any) => {
  return createNews(args);
};

export const newsLight = Template.bind({});
newsLight.args = {};

export const newsDark = Template.bind({});
newsDark.args = {
  dark: true,
};
