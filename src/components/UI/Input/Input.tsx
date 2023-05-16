import { FC, InputHTMLAttributes, memo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default memo(Input);
