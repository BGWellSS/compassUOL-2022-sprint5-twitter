import { Story, Meta } from "@storybook/html";
import { createPost, PostProps } from "./Post";

export default {
  title: "Components/Post",

  argTypes: {
    dark: { control: "boolean" },
    placeholder: { control: "text" },
  },
} as Meta;

const Template: Story<PostProps> = (args: any) => {
  return createPost(args);
};

export const postLigth = Template.bind({});
postLigth.args = {
  dark: false,
  placeholder: "What’s happening?",
};

export const postDark = Template.bind({});
postDark.args = {
  dark: true,
  placeholder: "What’s happening?",
};
