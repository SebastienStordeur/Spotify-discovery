"use client";
import { useEffect, useState, Suspense, useContext } from "react";
import Link from "next/link";
import { NextPage } from "next";
import axios from "axios";

import { AuthContext } from "@/store/AuthContext";
import { FormatData } from "@/utils/FormatDataGenres/FormatData";

import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import FavoritesSongs from "@/components/Profile/Favorites/FavoritesSongs";
import TopGenres from "@/components/Profile/Charts/TopGenres";
import ProfileContainer from "@/components/Profile/ProfileContainer/ProfileContainer";
import Main from "@/components/Layout/Main/Main";

const ProfilePage: NextPage = () => {
  //Change profile to currentUser
  const [profile, setProfile] = useState<any>({ profile: null, artists: null, playlists: null });
  const [data, setDatas] = useState<any>();
  const token = localStorage.getItem("token");
  const authCtx = useContext(AuthContext);

  const url = "https://api.spotify.com/v1/me";

  const getCurrentUserInformations = async (url: string, param: string) => {
    await axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setProfile((prev: any) => ({ ...prev, [param]: res.data })))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    authCtx.checkTokenValidity();
    getCurrentUserInformations(url, "profile");
    getCurrentUserInformations(url + "/top/artists?limit=50", "artists");
    getCurrentUserInformations(url + "/playlists", "playlists");
  }, []);

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
          <div className="grid grid-cols-2 w-full h-3/6 relative my-4">
            {profile.artists && <FavoritesSongs data={profile.artists.items} />}
            {data && data.length > 0 && <TopGenres data={data} />}
          </div>
        </Suspense>
      </section>
    </Main>
  );
};

export default ProfilePage;
