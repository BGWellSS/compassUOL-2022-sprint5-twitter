import { createTweet } from "./Tweet";
export default {
    title: "Components/Tweet",
    argTypes: {
        userName: { control: "text" },
        userTagName: { control: "text" },
        userID: { control: "text" },
        userURL: { control: "text" },
        postText: { control: "text" },
        imageURL: { control: "text" },
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createTweet(args);
};
export const tweetLigth = Template.bind({});
tweetLigth.args = {
    userName: "User Name",
    userTagName: "@tagname",
    userURL: "/404.html",
    postText: "Tom is in a big hurry.",
    imageURL: "/images/post-image-default.png",
    dark: false,
};
export const tweetDark = Template.bind({});
tweetDark.args = {
    userName: "User Name",
    userTagName: "@tagname",
    userURL: "/404.html",
    postText: "Tom is in a big hurry.",
    imageURL: "/images/post-image-default.png",
    dark: true,
};
//# sourceMappingURL=Tweet.stories.js.map