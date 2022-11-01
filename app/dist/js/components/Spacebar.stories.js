import { createSpacer } from "./Spacebar.js";
export default {
    title: "Components/Spacer",
    argTypes: {
        dark: { control: "boolean" },
    },
};
const Template = (args) => {
    return createSpacer(args);
};
export const spacerLigth = Template.bind({});
spacerLigth.args = {
    dark: false,
};
export const spacerDark = Template.bind({});
spacerDark.args = {
    dark: true,
};
//# sourceMappingURL=Spacebar.stories.js.map