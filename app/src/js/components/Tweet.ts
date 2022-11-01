import { createAvatar } from "./Avatar";
import "./../../../dist/styles/main.css";

export interface TweetProps {
  userName: string;
  userTagName: string;
  userID: string;
  userURL: string;
  postText: string;
  imageURL?: string;
  dark?: boolean;
}

export const createTweet = ({
  userName,
  userTagName,
  userID,
  userURL,
  postText,
  imageURL,
  dark,
}: TweetProps) => {
  const userAvatar = createAvatar({
    size: "medium",
    userID: userID,
    linkURL: userURL,
  });
  const postAria = `
    <article class="tweet-card${dark ? " tweet-dark" : ""}">
      <div class="avatar-container">
        ${userAvatar}
      </div>
      <div class="tweet-container">
        <header class="tweet-header">
          <h2 class="user-name">${userName}</h2>
          <span class="user-tag">${userTagName}</span>
          <span class="dot-separator">.</span>
          <div class="tweet-post-time">0s</div>
        </header>
        <section class="tweet-content">
          <div class="tweet-text-camp">${postText}</div>
          <div class="tweet-image-container">
            ${
              imageURL
                ? '<img src="' +
                  imageURL +
                  '" alt="tweet post image" class="tweet-image">'
                : ""
            }
          </div>
        </section>
        <footer class="tweet-footer">
          <div class="tweet-interactions">
            <div class="interaction-item">
              <input type="image" src="/images/icon-comments${
                dark ? "-dark" : ""
              }.png" alt="image imput icon" class="comments-icon">
              <span class="interaction-value comments-number">0</span>
            </div>
            <div class="interaction-item">
              <input type="image" src="/images/icon-retweet${
                dark ? "-dark" : ""
              }.png" alt="image imput icon" class="retweet-icon">
              <span class="interaction-value retweet-number">0</span>
            </div>
            <div class="interaction-item">
              <input type="image" src="/images/icon-like${
                dark ? "-dark" : ""
              }.png" alt="image imput icon" class="like-icon">
              <span class="interaction-value like-number">0</span>
            </div>
            <div class="interaction-item">
              <input type="image" src="/images/icon-share${
                dark ? "-dark" : ""
              }.png" alt="image imput icon" class="share-icon">
              <span class="interaction-value share-number">0</span>
            </div>
          </div>
          <a href="${userURL}" class="show-thread">Show this thread</a>
        </footer>
      </div>
    </article>
  `;
  return postAria;
};
