import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
