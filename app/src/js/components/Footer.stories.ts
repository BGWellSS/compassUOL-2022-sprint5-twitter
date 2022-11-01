import { Story, Meta } from "@storybook/html";
import { createFooter, FooterProps } from "./Footer.js";

export default {
  title: "Components/Footer",

  argTypes: {
    title: { control: "text" },
    desc: { control: "text" },
  },
} as Meta;

const Template: Story<FooterProps> = (args: any) => {
  return createFooter(args);
};

export const footer = Template.bind({});
footer.args = {
  title: "Don’t miss what’s happening",
  desc: "People on Twitter are first to know.",
};
