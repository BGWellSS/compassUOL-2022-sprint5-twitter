import "./../../../dist/styles/main.css";
export const createAvatar = ({ size, linkURL, userID }) => {
    let avatarElement = ``;
    const userValue = userID ? userID : "default";
    avatarElement = `
    <a href="${linkURL ? linkURL : "#"}">
      <picture class="avatar image-container">
        <img src="/images/avatar-${userValue}-${size}.png" alt="avatar image" class="avatar-image avatar-image-${size}">
      </picture>
    </a>
    `;
    return avatarElement;
};
//# sourceMappingURL=Avatar.js.map