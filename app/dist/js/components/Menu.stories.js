import { createMenu } from "./Menu";
export default {
    title: "Components/Menu",
    argTypes: {
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createMenu(args);
};
export const menu = Template.bind({});
menu.args = {};
export const menuDark = Template.bind({});
menuDark.args = {
    dark: true,
};
//# sourceMappingURL=Menu.stories.js.map