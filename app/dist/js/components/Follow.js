import { createProfile } from "./Profile.js";
export const createFollow = ({ dark }) => {
    const profileItems = [
        createProfile({
            userName: "Bessie Cooper",
            userTagName: "@alessandroveronezi",
            profileType: "follow",
            dark: dark,
            userID: "1",
            linkURL: "/404.html",
        }),
        createProfile({
            userName: "Jenny Wilson",
            userTagName: "@gabrielcantarin",
            profileType: "follow",
            dark: dark,
            userID: "2",
            linkURL: "/404.html",
        }),
    ];
    const followSection = `
    <section class="follow-section${dark ? " follow-section-dark" : ""}">
      <header class="follow-section-header">
        <h3 class="section-title">Who to follow</h3>
      </header>
      <div class="profiles-container">
        ${profileItems
        .map((item) => {
        return item;
    })
        .join("")}
      </div>
      <footer class="follow-section-footer">
        <a href="/404.html" class="follow-showmore">Show more</a>
      </footer>
    </section>
  `;
    return followSection;
};
//# sourceMappingURL=Follow.js.map