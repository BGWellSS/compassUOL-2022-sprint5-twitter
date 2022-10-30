import "./../../../dist/styles/main.css";

export interface ButtonProps {
  label: string;
  btnType: "primary" | "secondary" | "tertiary" | "quaternary";
  size: "small" | "medium" | "big";
  fade?: boolean;
  onClick?: () => void;
}

export const createButton = ({
  label,
  btnType,
  size,
  fade,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = label;

  btn.className = [
    "app-button",
    `btn-${btnType}`,
    `${fade ? "btn-fade" : ""}`,
    `btn-${size}`,
  ].join(" ");
  btn.addEventListener("click", onClick);

  return btn;
};
