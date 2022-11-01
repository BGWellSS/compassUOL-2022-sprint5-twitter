import { createProfile } from "./Profile.js";
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
};
const Template = (args) => {
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
//# sourceMappingURL=Profile.stories.js.map