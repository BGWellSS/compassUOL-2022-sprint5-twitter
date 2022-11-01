import { createButton } from "./Button.js";
import { createAvatar } from "./Avatar.js";
//import "./../../../dist/styles/main.css";

export interface PostProps {
  dark?: boolean;
  placeholder?: string;
}

export const createPost = ({ dark, placeholder }: PostProps) => {
  const userAvatar = createAvatar({
    size: "medium",
  });

  const tweetButton = createButton({
    label: "Tweet",
    btnType: "primary",
    size: "medium",
    fade: true,
  });
  //<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
  const postAria = `
    <section class="tweet-post${dark ? " post-dark" : ""}">
      <div class="avatar-container">
        ${userAvatar}
      </div>
      <div class="post-imput-container">
        <input type="text" id="post-aria" name="post-text" placeholder="${
          placeholder ? placeholder : "What’s happening?"
        }" maxlength="380" class="text-imput">
        <div class="menu-container">
          <div class="post-menu-icons">
            <input type="image" src="/images/icon-image-submit.png" alt="image imput icon" width="24" height="24">
            <input type="image" src="/images/icon-gif-submit.png" alt="gif imput icon" width="24" height="24">
            <input type="image" src="/images/icon-poll-submit.png" alt="poll imput icon" width="24" height="24">
            <input type="image" src="/images/icon-emogi-submit.png" alt="emogi imput icon" width="24" height="24">
            <input type="image" src="/images/icon-schedule-submit.png" alt="schedule imput icon" width="24" height="24">
          </div>
          <div class="button-container">
            ${tweetButton}
          </div>
        </div>
      </div>
    </section>
  `;
  return postAria;
};
