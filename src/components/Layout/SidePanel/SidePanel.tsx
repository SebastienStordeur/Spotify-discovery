import React, { FC } from "react";
import Link from "next/link";

const SidePanel: FC = () => {
  return (
    <div className="hidden md:flex h-screen w-72 bg-darkbg">
      <Link href="/profile">
        <div>Profile</div>
      </Link>
    </div>
  );
};

export default SidePanel;
