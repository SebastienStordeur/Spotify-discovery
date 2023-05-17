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
    <div className="flex">
      <SidePanel />
      <main className="px-10 bg-background w-full h-screen py-14">
        <Suspense fallback={<h1>Loading data</h1>}>
          {profile.profile && <ProfileContainer profile={profile} />}
          {profile.artists && <FavoritesSongs data={profile.artists.items} />}
          {data && data.length > 0 && <TopGenres data={data} />}
          {profile.playlists && (
            <div>
              {profile.playlists.items.map((playlist: any) => {
                return <div>{playlist.name}</div>;
              })}
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default ProfilePage;
