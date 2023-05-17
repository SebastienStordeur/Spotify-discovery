"use client";
import { useEffect, useState, Suspense, useContext } from "react";
import Link from "next/link";
import { NextPage } from "next";
import axios from "axios";

import { AuthContext } from "@/store/AuthContext";
import { FormatData } from "@/utils/FormatDataGenres/FormatData";

import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import ProfilePicture from "@/components/Profile/ProfilePicture";
import FavoritesSongs from "@/components/Profile/Favorites/FavoritesSongs";
import TopGenres from "@/components/Profile/Charts/TopGenres";

const ProfilePage: NextPage = () => {
  const [profile, setProfile] = useState<any>({ profile: null, artists: null });
  const [data, setDatas] = useState<any>();
  const token = localStorage.getItem("token");
  const authCtx = useContext(AuthContext);

  const url = "https://api.spotify.com/v1/me";

  const getCurrentUserInformations = async (url: string, param: string) => {
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile((prev: any) => ({ ...prev, [param]: res.data })))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    authCtx.checkTokenValidity();
    getCurrentUserInformations(url, "profile");
    getCurrentUserInformations("https://api.spotify.com/v1/me/top/artists?limit=50", "artists");
  }, []);

  //playlist = https://api.spotify.com/v1/me/playlists

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
          {profile.profile && (
            <div className="flex flex-col items-center">
              <ProfilePicture />
              <div>
                <h1 className="text-white font-semibold text-lg text-center">{profile.profile.display_name}</h1>
                {profile.profile.uri && <Link href={profile.profile.uri}>Link to his Spotify profile</Link>}
              </div>
            </div>
          )}
          {profile.artists && <FavoritesSongs data={profile.artists.items} />}
          {data && data.length > 0 && <TopGenres data={data} />}
        </Suspense>
      </main>
    </div>
  );
};

export default ProfilePage;
