import { createButton } from "./Button.js";
//import "./../../../dist/styles/main.css";

export interface FooterProps {
  title: string;
  desc: string;
}

export const createFooter = ({ title, desc }: FooterProps) => {
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
      <div class="button-item">
        ${loginButton}
      </div>
      <div class="button-item">
        ${signupButton}
      </div>
    </div>
  </footer>
  `;
  return footer;
};
