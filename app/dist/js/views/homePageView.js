import { createTweet } from "./../components/Tweet.js";
import { createPost } from "./../components/Post.js";
import { createFooter } from "./../components/Footer.js";
import { createHeader } from "./../components/Header.js";
import { createMenu } from "./../components/Menu.js";
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
    const pageHeader = createHeader({ label: "Home", dark: false });
    const tweetPostAria = createPost({
        dark: false,
        placeholder: "What’s happening?",
    });
    const tweet = createTweet({
        userName: "Devon Lane",
        userTagName: "@johndue",
        userID: "default",
        userURL: "/404.html",
        postText: "Tom is in a big hurry.",
        dark: false,
    });
    const pageFooter = createFooter({
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
//# sourceMappingURL=homePageView.js.map