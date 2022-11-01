import { createFollow } from "./Follow";
export default {
    title: "Components/Follow Section",
    argTypes: {
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
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
//# sourceMappingURL=Follow.stories.js.map