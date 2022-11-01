import { createAvatar } from "./Avatar.js";
export default {
    title: "Components/Avatar",
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium"],
        },
        userID: { control: "text" },
        linkURL: { control: "text" },
    },
};
const Template = (args) => {
    return createAvatar(args);
};
export const avatarSmall = Template.bind({});
avatarSmall.args = {
    size: "small",
    linkURL: "/404.html",
};
export const avatarMedium = Template.bind({});
avatarMedium.args = {
    size: "medium",
    linkURL: "/404.html",
};
//# sourceMappingURL=Avatar.stories.js.map