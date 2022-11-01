import { createAvatar } from "./Avatar.js";
import { createButton } from "./Button.js";
//import "./../../../dist/styles/main.css";

export interface ProfileProps {
  userName: string;
  userTagName: string;
  profileType: "basic" | "follow";
  dark?: boolean;
  userID?: string;
  linkURL?: string;
}

export const createProfile = ({
  userName,
  userTagName,
  profileType,
  dark,
  userID,
  linkURL,
}: ProfileProps) => {
  const profileAvatar = createAvatar({
    size: profileType === "basic" ? "small" : "medium",
    userID: userID,
    linkURL: linkURL,
  });

  function profileButton(): string {
    if (profileType === "basic") {
      return `<a href="${linkURL ? linkURL : "#"}">
                <img src="/images/icon-config${
                  dark ? "-dark" : ""
                }.png" alt="config icon" class="config-icon">
              </a>`;
    }
    return createButton({
      btnType: "secondary",
      label: "Follow",
      size: "small",
    });
  }

  const profileContent = `
    <article class="profile${dark ? " profile-dark" : ""}">
      ${profileAvatar}
      <div class="profile-content">
        <p class="user-name">${userName}</p>
        <p class="user-tagname">${userTagName}</p>
      </div>
      <div class="profile-button">
        ${profileButton()}
      </div>
    </article>
    `;
  return profileContent;
};
