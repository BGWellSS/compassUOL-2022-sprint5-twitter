import "./../../../dist/styles/main.css";

export interface SpacerProps {
  dark?: boolean;
}

export const createSpacer = ({ dark }: SpacerProps) => {
  const spacer = `
  <div class="spacer${dark ? " spacer-dark" : ""}"></div>
  `;
  return spacer;
};
