import { createMenu } from "./../components/Menu.js";
import "./../../styles/main.css";
export function homePageView() {
  const selector: string = "homepage-body";
  const element = document.getElementById(selector);
  let bodyPageDOM: HTMLElement;
  if (element) {
    bodyPageDOM = element as HTMLElement;
  } else {
    throw Error(`Selector: ${selector} does not exist in DOM, check again.`);
  }
  const sideMenu: string = createMenu({ dark: false });
  bodyPageDOM.innerHTML = sideMenu;
}
