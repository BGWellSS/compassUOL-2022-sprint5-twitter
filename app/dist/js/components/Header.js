import "./../../../dist/styles/main.css";
export const createHeader = ({ label, dark }) => {
    const header = `
  <header class="page-header${dark ? " header-dark" : ""}">
    <h1 class="header-title">${label}</h1>
    <picture class="image-container">
      <img src="/images/icon-theme-selector.png" alt="theme selector icon">
    </picture>
  <header>
  `;
    return header;
};
//# sourceMappingURL=Header.js.map