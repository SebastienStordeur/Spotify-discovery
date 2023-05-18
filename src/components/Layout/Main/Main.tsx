import React, { FC, ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className="flex min-h-[100vh] relative">{children}</main>;
};

export default Main;
