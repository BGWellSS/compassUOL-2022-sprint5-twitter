import "./../../../dist/styles/main.css";
export const createSpacer = ({ dark }) => {
    const spacer = `
  <div class="spacer${dark ? " spacer-dark" : ""}"></div>
  `;
    return spacer;
};
//# sourceMappingURL=Spacebar.js.map