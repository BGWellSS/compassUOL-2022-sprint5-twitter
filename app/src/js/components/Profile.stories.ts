import { Story, Meta } from "@storybook/html";
import { createProfile, ProfileProps } from "./Profile";

export default {
  title: "Components/Profile",

  argTypes: {
    userName: { control: "text" },
    userTagName: { control: "text" },
    profileType: {
      control: { type: "select" },
      options: ["basic", "folow"],
    },
    dark: { control: "boolean" },
    userID: { control: "text" },
    linkURL: { control: "text" },
  },
} as Meta;

const Template: Story<ProfileProps> = (args: any) => {
  return createProfile(args);
};

export const profileLigth = Template.bind({});
profileLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "basic",
};
