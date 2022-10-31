import "./button.css";
export const createButton = ({ primary = false, size = "medium", label, }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    const mode = primary ? "button--primary" : "button--secondary";
    btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(" ");
    return btn;
};
//# sourceMappingURL=Button.js.map