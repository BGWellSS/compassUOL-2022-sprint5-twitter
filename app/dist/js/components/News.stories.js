import { createNews } from "./News.js";
export default {
    title: "Components/News Section",
    argTypes: {
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createNews(args);
};
export const newsLight = Template.bind({});
newsLight.args = {};
export const newsDark = Template.bind({});
newsDark.args = {
    dark: true,
};
//# sourceMappingURL=News.stories.js.map