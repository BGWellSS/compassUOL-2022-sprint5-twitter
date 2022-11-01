import "./../../../dist/styles/main.css";

export interface AvatarProps {
  size: "small" | "medium";
  userID?: string;
  linkURL?: string;
}

export const createAvatar = ({ size, linkURL, userID }: AvatarProps) => {
  let avatarElement: string = ``;
  const userValue: string = userID ? userID : "default";

  avatarElement = `
    <a href="${linkURL ? linkURL : "#"}">
      <picture class="avatar image-container">
        <img src="/images/avatar-${userValue}-${size}.png" alt="avatar image" class="avatar-image avatar-image-${size}">
      </picture>
    </a>
    `;
  return avatarElement;
};
