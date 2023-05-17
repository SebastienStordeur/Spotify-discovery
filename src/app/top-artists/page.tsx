"use client";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Playlist from "@/components/Playlists/Playlist/Playlist";
import axios from "axios";
import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";

const page: NextPage = () => {
  const token = localStorage.getItem("token");
  const [playlists, setPlaylists] = useState<any>([]);

  useEffect(() => {
    axios.get("https://api.spotify.com/v1/me/playlists", { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      console.log(res.data);
      setPlaylists(res.data.items);
    });
  }, []);
  return (
    <main className="flex">
      <SidePanel />
      <div className="px-14 bg-background w-full min-h-screen py-14">
        <h1 className="text-white text-2xl font-semibold">Find all your playlists</h1>
        <section className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 py-16">
          {playlists && (
            <Suspense fallback={<h2>Loading data</h2>}>
              {playlists.map((playlist: any) => {
                return <Playlist playlist={playlist} />;
              })}
            </Suspense>
          )}
        </section>
      </div>
    </main>
  );
};

export default page;
