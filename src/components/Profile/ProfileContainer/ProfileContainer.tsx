import React, { FC } from "react";
import ProfilePicture from "../ProfilePicture";
import Playlists from "./Playlists/Playlists";

import Link from "next/link";

interface ProfileContainerProps {
  profile: any;
}

const ProfileContainer: FC<ProfileContainerProps> = (props) => {
  const { profile, playlists } = props.profile;
  return (
    <div className="flex justify-evenly my-8">
      <div className="flex ">
        <ProfilePicture />
        <div>
          <h1 className="text-white font-semibold text-lg text-center">{profile.display_name}</h1>
          {profile.uri && <Link href={profile.uri}>Link to his Spotify profile</Link>}
        </div>
      </div>

      <Playlists playlists={playlists} />
    </div>
  );
};

export default ProfileContainer;
