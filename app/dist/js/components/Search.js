import "./../../../dist/styles/main.css";
export const createSearch = ({ placeholder, dark }) => {
    const search = `
  <section class="app-search${dark ? " search-dark" : ""}">
    <img src="/images/icon-search${dark ? "-dark" : ""}.png" alt="search icon" class="search-icon">
    <input type="text" id="imput-search" name="search-text" placeholder="${placeholder ? placeholder : "Search Twitter"}" class="imput-search">
  </section>
  `;
    return search;
};
//# sourceMappingURL=Search.js.map