import { Story, Meta } from "@storybook/html";
import { createProfile, ProfileProps } from "./Profile";

export default {
  title: "Components/Profile",

  argTypes: {
    userName: { control: "text" },
    userTagName: { control: "text" },
    profileType: {
      control: { type: "select" },
      options: ["basic", "follow"],
    },
    dark: { control: "boolean" },
    userID: { control: "text" },
    linkURL: { control: "text" },
  },
} as Meta;

const Template: Story<ProfileProps> = (args: any) => {
  return createProfile(args);
};

export const profileBasicLigth = Template.bind({});
profileBasicLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "basic",
};

export const profileBasicDark = Template.bind({});
profileBasicDark.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "basic",
  dark: true,
};

export const profileFolowLigth = Template.bind({});
profileFolowLigth.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "follow",
};

export const profileFolowDark = Template.bind({});
profileFolowDark.args = {
  userName: "User Name",
  userTagName: "@tagname",
  profileType: "follow",
  dark: true,
};
