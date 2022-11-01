import { createHeader } from "./Header.js";
export default {
    title: "Components/Header",
    argTypes: {
        label: { control: "text" },
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createHeader(args);
};
export const headerLigth = Template.bind({});
headerLigth.args = {
    label: "Home",
    dark: false,
};
export const headerDark = Template.bind({});
headerDark.args = {
    label: "Home",
    dark: true,
};
//# sourceMappingURL=Header.stories.js.map