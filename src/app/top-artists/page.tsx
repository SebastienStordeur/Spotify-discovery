"use client";
import Main from "@/components/Layout/Main/Main";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Artist from "@/components/Playlists/Artist/Artist";
import Playlist from "@/components/Playlists/Playlist/Playlist";
import axios from "axios";
import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";

const TopArtistsPage: NextPage = () => {
  const token = localStorage.getItem("token");
  const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    axios.get("https://api.spotify.com/v1/me/top/artists?limit=50", { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      console.log(res.data);
      setArtists(res.data.items);
    });
  }, []);

  return (
    <Main>
      <SidePanel />
      <section className="md:ml-24 px-8 md:px-14 bg-background w-full min-h-full py-8 md:py-14">
        <h1 className="text-white text-2xl font-semibold">Find all your most listened artists</h1>
        <div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 py-16">
          {artists && (
            <Suspense fallback={<h2>Loading data</h2>}>
              {artists.map((artist: any) => {
                return <Artist artist={artist} />;
              })}
            </Suspense>
          )}
        </div>
      </section>
    </Main>
  );
};

export default TopArtistsPage;
