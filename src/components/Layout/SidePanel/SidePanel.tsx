import React, { FC } from "react";
import Link from "next/link";
import music from "../../../assets/icons/music.svg";

const SidePanel: FC = () => {
  return (
    <div className="hidden md:flex items-center h-screen w-24 bg-darkbg fixed">
      <ul className="w-full relative text-xs">
        <li className="flex justify-center items-center text-center h-16 w-full cursor-pointer hover:bg-accent">
          <Link href="/profile" className="text-white font-semibold font-xs">
            <img src="../../../assets/icons/music.svg" alt="" />
            Profile
          </Link>
        </li>
        <li className="flex justify-center items-center text-center h-20 w-full cursor-pointer hover:bg-accent">
          <Link href="/playlists" className="text-white text-center font-semibold font-xs">
            <img src="../../../assets/icons/music.svg" alt="" />
            Playlists
          </Link>
        </li>
        <li className="flex justify-center items-center text-center h-20 w-full cursor-pointer hover:bg-accent">
          <Link href="/top-artists" className="text-white text-center font-semibold font-xs">
            <img src="../../../assets/icons/music.svg" alt="" />
            Top Artists
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
