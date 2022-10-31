import { createMenuItem } from "./MenuItem";
export default {
    title: "Components/MenuItem",
    argTypes: {
        iconName: {
            control: { type: "select" },
            options: [
                "logo",
                "home",
                "explore",
                "notifications",
                "messages",
                "bookmarks",
                "lists",
                "profile",
                "more",
            ],
        },
        label: { control: "text" },
        linkURL: { control: "text" },
        dark: { control: "boolean" },
        selected: { control: "boolean" },
    },
};
const Template = (args) => {
    return createMenuItem(args);
};
export const menuItem = Template.bind({});
menuItem.args = {
    label: "Home",
    iconName: "home",
    linkURL: "/404.html",
};
export const menuItemDark = Template.bind({});
menuItemDark.args = {
    label: "Home",
    iconName: "home",
    linkURL: "/404.html",
    dark: true,
};
export const menuItemSelected = Template.bind({});
menuItemSelected.args = {
    label: "Home",
    iconName: "home",
    linkURL: "/404.html",
    selected: true,
};
//# sourceMappingURL=MenuItem.stories.js.map