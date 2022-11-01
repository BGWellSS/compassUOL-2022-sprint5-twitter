import { createButton } from "./Button";
import "./../../../dist/styles/main.css";
export const createFooter = ({ title, desc }) => {
    const loginButton = createButton({
        label: "Log in",
        btnType: "quaternary",
        size: "medium",
    });
    const signupButton = createButton({
        label: "Sign up",
        btnType: "tertiary",
        size: "medium",
    });
    const footer = `
  <footer class="page-footer">
    <div class="footer-content">
      <h4 class="footer-title">${title}</h1>
      <p class="footer-desc">${desc}</p>
    </div>
    <div class="footer-buttons">
      ${loginButton}
      ${signupButton}
    </div>
  </footer>
  `;
    return footer;
};
//# sourceMappingURL=Footer.js.map