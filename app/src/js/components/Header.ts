import "./../../../dist/styles/main.css";

export interface HeaderProps {
  label: string;
  dark?: boolean;
}

export const createHeader = ({ label, dark }: HeaderProps) => {
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
