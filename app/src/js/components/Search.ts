import "./../../../dist/styles/main.css";

export interface SearchProps {
  placeholder?: string;
  dark?: boolean;
}

export const createSearch = ({ placeholder, dark }: SearchProps) => {
  const search = `
  <section class="app-search${dark ? " search-dark" : ""}">
    <img src="/images/icon-search${dark ? "-dark" : ""}.png" alt="search icon">
    <input type="text" id="imput-search" name="search-text" placeholder="${
      placeholder ? placeholder : "Search Twitter"
    }" class="imput-search">
  </section>
  `;
  return search;
};
