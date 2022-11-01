import { Story, Meta } from "@storybook/html";
import { createSpacer, SpacerProps } from "./Spacebar.js";

export default {
  title: "Components/Spacer",

  argTypes: {
    dark: { control: "boolean" },
  },
} as Meta;

const Template: Story<SpacerProps> = (args: any) => {
  return createSpacer(args);
};

export const spacerLigth = Template.bind({});
spacerLigth.args = {
  dark: false,
};

export const spacerDark = Template.bind({});
spacerDark.args = {
  dark: true,
};
