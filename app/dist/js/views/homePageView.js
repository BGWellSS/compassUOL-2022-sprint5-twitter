import { createMenu } from "./../components/Menu.js";
import "./../../styles/main.css";
export function homePageView() {
    const selector = "homepage-body";
    const element = document.getElementById(selector);
    let bodyPageDOM;
    if (element) {
        bodyPageDOM = element;
    }
    else {
        throw Error(`Selector: ${selector} does not exist in DOM, check again.`);
    }
    const sideMenu = createMenu({ dark: false });
    bodyPageDOM.innerHTML = sideMenu;
}
//# sourceMappingURL=homePageView.js.map