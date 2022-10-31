import "./../../../dist/styles/main.css";
export const createButton = ({ label, btnType, size, fade }) => {
    const btn = `
    <button class="app-button btn-${btnType} ${fade ? "btn-fade" : ""} btn-${size}">
      ${label}
    </button>
  `;
    return btn;
};
//# sourceMappingURL=Button.js.map