import { createTweet } from "./../components/Tweet.js";
import { createPost } from "./../components/Post.js";
import { createFooter } from "./../components/Footer.js";
import { createHeader } from "./../components/Header.js";
import { createMenu } from "./../components/Menu.js";
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
  const pageHeader: string = createHeader({ label: "Home", dark: false });
  const tweetPostAria: string = createPost({
    dark: false,
    placeholder: "What’s happening?",
  });
  const tweet: string = createTweet({
    userName: "Devon Lane",
    userTagName: "@johndue",
    userID: "default",
    userURL: "/404.html",
    postText: "Tom is in a big hurry.",
    dark: false,
  });
  const pageFooter: string = createFooter({
    title: "Don’t miss what’s happening",
    desc: "People on Twitter are first to know.",
  });
  bodyPageDOM.innerHTML = `
    <div>
      <div>${sideMenu}</div>
      <div>
        ${pageHeader}
        ${tweetPostAria}
        ${tweet}
      </div>
      <div></div>
    </div>
    ${pageFooter}
  `;
}
