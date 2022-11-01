import { createProfile } from "./Profile.js";
import { createButton } from "./Button.js";
import { createMenuItem } from "./MenuItem.js";
export const createMenu = ({ dark }) => {
    const menuItems = [
        createMenuItem({
            iconName: "logo",
            linkURL: "/404.html",
            selected: true,
        }),
        createMenuItem({
            iconName: "home",
            label: "Home",
            linkURL: "/404.html",
            dark: dark ? dark : false,
            selected: true,
        }),
        createMenuItem({
            iconName: "explore",
            label: "Explore",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "notifications",
            label: "Notifications",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "messages",
            label: "Messages",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "bookmarks",
            label: "Bookmarks",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "lists",
            label: "Lists",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "profile",
            label: "Profile",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
        createMenuItem({
            iconName: "more",
            label: "More",
            linkURL: "/404.html",
            dark: dark ? dark : false,
        }),
    ];
    const tweetButton = createButton({
        label: "Tweet",
        btnType: "primary",
        size: "big",
    });
    const profileItem = createProfile({
        userName: "User Name",
        userTagName: "@tagname",
        profileType: "basic",
        dark: dark ? dark : false,
    });
    const sideMenu = `
    <aside class="aside-menu aside-container${dark ? " menu-dark" : ""}">
      <ul class="main-menu">
        ${menuItems
        .map((item) => {
        return item;
    })
        .join("")}
      </ul>
      ${tweetButton}
      ${profileItem}
    </aside>
  `;
    return sideMenu;
};
//# sourceMappingURL=Menu.js.map