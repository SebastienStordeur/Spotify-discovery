"use client";
import { useEffect, useState, Suspense, useContext } from "react";
import { NextPage } from "next";

import { AuthContext } from "@/store/AuthContext";
import { FormatData } from "@/utils/FormatDataGenres/FormatData";

import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import FavoritesSongs from "@/components/Profile/Favorites/FavoritesSongs";
import TopGenres from "@/components/Profile/Charts/TopGenres";
import ProfileContainer from "@/components/Profile/ProfileContainer/ProfileContainer";
import Main from "@/components/Layout/Main/Main";
import { getDataFromAPI } from "@/utils/GetInformationsApi/GetInformationAPI";

const ProfilePage: NextPage = () => {
  const [profile, setProfile] = useState<any>({ profile: null, artists: null, playlists: null });
  const [data, setDatas] = useState<any>();
  const authCtx = useContext(AuthContext);

  const url = "https://api.spotify.com/v1/me";

  useEffect(() => {
    authCtx.checkTokenValidity();
    getDataFromAPI(url, setProfile, "profile");
    getDataFromAPI(url + "/top/artists?limit=50", setProfile, "artists");
    getDataFromAPI(url + "/playlists", setProfile, "playlists");
  }, [authCtx]);

  useEffect(() => {
    if (profile.artists) {
      const formatedData = FormatData(profile.artists.items);
      setDatas(formatedData);
    }
    return;
  }, [profile]);

  return (
    <Main>
      <SidePanel />
      <section className="md:ml-24 px-8 md:px-14 bg-background w-full min-h-full md:py-14">
        <Suspense fallback={<h1>Loading data</h1>}>
          {profile.profile && profile.playlists && <ProfileContainer profile={profile} />}
          <div className="grid lg:grid-cols-2 h-3/6 relative my-4">
            {profile.artists && <FavoritesSongs data={profile.artists.items} />}
            {data && data.length > 0 && <TopGenres data={data} />}
          </div>
        </Suspense>
      </section>
    </Main>
  );
};

export default ProfilePage;
