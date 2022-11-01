import { createFooter } from "./Footer";
export default {
    title: "Components/Footer",
    argTypes: {
        title: { control: "text" },
        desc: { control: "text" },
    },
};
const Template = (args) => {
    return createFooter(args);
};
export const footer = Template.bind({});
footer.args = {
    title: "Don’t miss what’s happening",
    desc: "People on Twitter are first to know.",
};
//# sourceMappingURL=Footer.stories.js.map