import { createPost } from "./Post";
export default {
    title: "Components/Post",
    argTypes: {
        dark: { control: "boolean" },
        placeholder: { control: "text" },
    },
};
const Template = (args) => {
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
//# sourceMappingURL=Post.stories.js.map