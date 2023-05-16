import React, { ButtonHTMLAttributes, FC, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
