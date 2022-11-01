import { Story, Meta } from "@storybook/html";
import { createButton, ButtonProps } from "./Button.js";

export default {
  title: "Components/Button",

  argTypes: {
    label: { control: "text" },
    btnType: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "quaternary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "big"],
    },
    fade: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: any) => {
  return createButton(args);
};

export const primaryBig = Template.bind({});
primaryBig.args = {
  btnType: "primary",
  label: "Primary Big",
  size: "big",
};

export const primaryMedium = Template.bind({});
primaryMedium.args = {
  btnType: "primary",
  label: "Primary medium",
  size: "medium",
};

export const primaryMediumFade = Template.bind({});
primaryMediumFade.args = {
  btnType: "primary",
  label: "Primary medium faded",
  size: "medium",
  fade: true,
};

export const secondaryMedium = Template.bind({});
secondaryMedium.args = {
  btnType: "secondary",
  label: "Secondary Medium",
  size: "medium",
};

export const secondarySmall = Template.bind({});
secondarySmall.args = {
  btnType: "secondary",
  label: "Secondary Small",
  size: "small",
};

export const tertiaryMedium = Template.bind({});
tertiaryMedium.args = {
  btnType: "tertiary",
  label: "Tertiary Medium",
  size: "medium",
};

export const quaternaryMedium = Template.bind({});
quaternaryMedium.args = {
  btnType: "quaternary",
  label: "Quaternary Medium",
  size: "medium",
};
