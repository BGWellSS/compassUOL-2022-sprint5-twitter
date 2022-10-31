import "./../../../dist/styles/main.css";

export interface MenuItemProps {
  label: string;
  iconName:
    | "logo"
    | "home"
    | "explore"
    | "notifications"
    | "messages"
    | "bookmarks"
    | "lists"
    | "profile"
    | "more";
  linkURL?: string;
  dark?: boolean;
  selected?: boolean;
}

export const createMenuItem = ({
  label,
  iconName,
  linkURL,
  dark,
  selected,
}: MenuItemProps) => {
  let menuItem: string = ``;
  if (selected) {
    menuItem = `
    <li class="menu-item${selected ? " menu-selected" : ""}">
      <a href="${linkURL ? linkURL : ""}">
        <picture class="image-container">
          <img src="/images/icon-${iconName}${
      selected ? "-selected" : ""
    }.png" alt="${iconName} menu icon">
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
          <img src="/images/icon-${iconName}${
    dark ? "-dark" : ""
  }.png" alt="${iconName} menu icon">
        </picture>
        <span class="label">${label}</span>
      </a>
    </li>
    `;
  return menuItem;
};
