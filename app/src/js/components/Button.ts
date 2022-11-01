import "./../../../dist/styles/main.css";

export interface ButtonProps {
  label: string;
  btnType: "primary" | "secondary" | "tertiary" | "quaternary";
  size: "small" | "medium" | "big";
  fade?: boolean;
}

export const createButton = ({ label, btnType, size, fade }: ButtonProps) => {
  const btn = `
    <button class="app-button btn-${btnType} ${
    fade ? "btn-fade" : ""
  } btn-${size}">
      ${label}
    </button>
  `;
  return btn;
};
