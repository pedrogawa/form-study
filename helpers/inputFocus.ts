interface onInputFocusProps {
  focus: boolean;
  name: string;
}

export const onInputFocus = ({ focus, name }: onInputFocusProps) => {
  let inputContainer = document.querySelector<HTMLElement>(
    `#input-container-${name}`
  );
  let icon = document.querySelector<HTMLElement>(`#icon-${name}`);

  if (focus) {
    if (inputContainer) {
      inputContainer.style.border = "2px solid rebeccapurple";
      if (icon) {
        icon.style.color = "rebeccapurple";
      }
    }
  } else {
    if (inputContainer) {
      inputContainer.style.border = "2px solid rgba(183, 171, 177, 0.46)";
      if (icon) {
        icon.style.color = "";
      }
    }
  }
};
