import { Story, Meta } from "@storybook/html";
import { createFollow, FollowProps } from "./Follow";

export default {
  title: "Components/Follow Section",

  argTypes: {
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<FollowProps> = (args: any) => {
  return createFollow(args);
};

export const followLight = Template.bind({});
followLight.args = {
  dark: false,
};

export const followDark = Template.bind({});
followDark.args = {
  dark: true,
};
