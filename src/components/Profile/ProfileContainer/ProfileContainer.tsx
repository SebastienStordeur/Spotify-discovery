import React, { FC } from "react";
import ProfilePicture from "../ProfilePicture";

interface ProfileContainerProps {
  profile: any;
}

const ProfileContainer: FC<ProfileContainerProps> = (props) => {
  const { profile, playlists } = props.profile;
  const { followers } = profile;

  return (
    <div className="flex flex-col items-center text-center text-white font-semibold text-lg">
      <ProfilePicture />
      <div>
        <h1 className="mt-3">{profile.display_name}</h1>
        {followers && (
          <div className="flex gap-8 mt-3">
            <div className="flex flex-col">
              Followers<span className="text-accent">{followers.total}</span>
            </div>
            <div className="flex flex-col">
              Follows<span className="text-accent">{followers.total}</span>
            </div>
            <div className="flex flex-col">
              Playlists<span className="text-accent">{playlists.total || 0}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
