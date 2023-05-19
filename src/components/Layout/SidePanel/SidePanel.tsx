import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import music from "../../../assets/icons/music.svg";
import profile from "../../../assets/icons/profile.svg";
import activeMusic from "../../../assets/icons/activeMusic.svg";
import activeProfile from "../../../assets/icons/activeProfile.svg";
import { usePathname } from "next/navigation";

const SidePanel: FC = () => {
  const pathname = usePathname();
  const links = [
    { url: "/profile", name: "Profile", icon: profile, activeIcon: activeProfile },
    { url: "/top-artists", name: "Top artists", icon: music, activeIcon: activeMusic },
    { url: "/playlists", name: "Playlists", icon: music, activeIcon: activeMusic },
  ];

  return (
    <div className="hidden md:flex items-center h-screen w-24 bg-darkbg fixed shadow-lg shadow-darkbg">
      <ul className="w-full relative text-xs">
        {links.map((link) => (
          <li
            key={link.name}
            className={`flex justify-center items-center h-16 w-full cursor-pointer ${pathname === link.url ? "text-accent bg-background" : "text-white"}`}
          >
            <Link href={link.url} className="flex flex-col items-center font-semibold font-xs">
              <Image src={pathname === link.url ? link.activeIcon : link.icon} alt="" width={16} height={16} />
              <span className="mt-2">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
