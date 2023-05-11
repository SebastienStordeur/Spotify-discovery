"use client";
import React, { useEffect, useState, Suspense, useContext } from "react";
import axios from "axios";
import Link from "next/link";
import { NextPage } from "next";
import { AuthContext } from "@/store/AuthContext";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import ProfilePicture from "@/components/Profile/ProfilePicture";

const ProfilePage: NextPage = () => {
  const [profile, setProfile] = useState<any>({});
  const token = localStorage.getItem("token");
  const scope = "user-top-read";

  const authCtx = useContext(AuthContext);

  const getCurrentUser = async () => {
    await axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCurrentUser();
    axios
      .get(
        `https://api.spotify.com/v1/recommendations?limit=5&seed_artists=4NHQUGzhtTLFvgF5SZesLK&&seed_genres=classical,country&seed_tracks=0c6xIDDpzE81m2q797ordA`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.error("ERROR", err));
  }, []);

  return (
    <div className="flex">
      <SidePanel />
      <main className="bg-background w-full h-screen py-14">
        <Suspense fallback={<h1>Loading data</h1>}>
          {profile && (
            <div className="flex flex-col items-center">
              <ProfilePicture />
              <div>
                <h1>{profile.display_name}</h1>
                {profile.uri && <Link href={profile.uri}>Link to his Spotify profile</Link>}
              </div>
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default ProfilePage;

/*  */
