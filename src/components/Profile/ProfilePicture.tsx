import Image from "next/image";
import React, { FC } from "react";

import defaultUser from "../../assets/images/default.png";

interface ProfilePictureProps {
  imageLink?: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ imageLink }) => {
  return (
    <div className="h-56 w-56 rounded-full overflow-hidden relative">
      <Image src={imageLink ? imageLink : defaultUser} alt="Default user" className="object-cover absolute overflow-hidden" priority />
    </div>
  );
};

export default ProfilePicture;
