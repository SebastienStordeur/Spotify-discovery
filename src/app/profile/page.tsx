"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ProfilePage = () => {
  const [profile, setProfile] = useState<any>({});

  const scope = "user-top-read";

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://api.spotify.com/v1/recommendations?limit=5&seed_artists=4NHQUGzhtTLFvgF5SZesLK&&seed_genres=classical,country&seed_tracks=0c6xIDDpzE81m2q797ordA`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error("ERROR", err));
  }, []);

  return (
    <div>
      {profile && (
        <div>
          <h1>{profile.display_name}</h1>
          {profile.uri && (
            <Link href={profile.uri}>Link to his Spotify profile</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

/* axios
.get("https://api.spotify.com/v1/me", {
  headers: {
    Authorization: "Bearer " + token,
  },
})
.then((res) => {
  console.log(res.data);
  setProfile(res.data);
}); */
