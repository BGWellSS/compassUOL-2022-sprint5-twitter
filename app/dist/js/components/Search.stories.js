import { createSearch } from "./Search";
export default {
    title: "Components/Search",
    argTypes: {
        placeholder: { control: "text" },
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createSearch(args);
};
export const searchLigth = Template.bind({});
searchLigth.args = {
    placeholder: "Search Twitter",
    dark: false,
};
export const searchDark = Template.bind({});
searchDark.args = {
    placeholder: "Search Twitter",
    dark: true,
};
//# sourceMappingURL=Search.stories.js.map