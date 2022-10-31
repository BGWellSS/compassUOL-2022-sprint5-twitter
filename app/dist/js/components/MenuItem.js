import "./../../../dist/styles/main.css";
export const createMenuItem = ({ label, iconName, linkURL, dark, selected, }) => {
    let menuItem = ``;
    if (selected) {
        menuItem = `
    <li class="menu-item${selected ? " menu-selected" : ""}">
      <a href="${linkURL ? linkURL : ""}">
        <picture class="image-container">
          <img src="/images/icon-${iconName}${selected ? "-selected" : ""}.png" alt="${iconName} menu icon">
        </picture>
        <span class="label">${label}</span>
      </a>
    </li>
    `;
        return menuItem;
    }
    menuItem = `
    <li class="menu-item${dark ? " menu-dark" : ""}">
      <a href="${linkURL ? linkURL : ""}">
        <picture class="image-container">
          <img src="/images/icon-${iconName}${dark ? "-dark" : ""}.png" alt="${iconName} menu icon">
        </picture>
        <span class="label">${label}</span>
      </a>
    </li>
    `;
    return menuItem;
};
//# sourceMappingURL=MenuItem.js.map