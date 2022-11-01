import { Story, Meta } from "@storybook/html";
import { createNewsCard, NewsCardProps } from "./Newscard";

export default {
  title: "Components/News Card",

  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    time: { control: "text" },
    textContent: { control: "text" },
    tags: { control: "text" },
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<NewsCardProps> = (args: any) => {
  return createNewsCard(args);
};

export const newsCardLigth = Template.bind({});
newsCardLigth.args = {
  id: "default",
  title: "COVID19",
  time: "Last night",
  textContent:
    "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
  tags: "#covid19",
  dark: false,
};

export const newsCardDark = Template.bind({});
newsCardDark.args = {
  id: "1",
  title: "US news",
  time: "4h ago",
  textContent:
    "Parler may go offline following suspensions by Amazon, Apple and Google",
  tags: "#trump",
  dark: true,
};
