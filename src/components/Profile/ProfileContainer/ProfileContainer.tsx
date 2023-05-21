import React, { FC } from "react";
import ProfilePicture from "../ProfilePicture";
import Playlists from "./Playlists/Playlists";

interface ProfileContainerProps {
  profile: any;
}

const ProfileContainer: FC<ProfileContainerProps> = (props) => {
  const { profile, playlists } = props.profile;
  const { followers } = profile;
  console.log(props);
  return (
    <div className="flex flex-col items-center text-center text-white font-semibold text-lg my-8">
      <ProfilePicture />
      <div>
        <h1>{profile.display_name}</h1>
        {followers && (
          <div className="flex gap-8">
            <div className="flex flex-col">
              Followers<span className="text-accent">{followers.total}</span>
            </div>
            <div className="flex flex-col">
              Follows<span className="text-accent">{followers.total}</span>
            </div>
            <div className="flex flex-col">
              Playlists<span className="text-accent">{followers.total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
