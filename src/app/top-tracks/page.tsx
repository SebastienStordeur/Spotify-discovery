"use client";
import Main from "@/components/Layout/Main/Main";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Track from "@/components/Playlists/Tracks/Track";
import { AuthContext } from "@/store/AuthContext";
import { getDataFromAPI } from "@/utils/GetInformationsApi/GetInformationAPI";
import { NextPage } from "next";
import React, { Suspense, useContext, useEffect, useState } from "react";

const TopTracksPage: NextPage = () => {
  const [tracks, setTracks] = useState<any>();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      authCtx.checkTokenValidity();
      getDataFromAPI("https://api.spotify.com/v1/me/top/tracks?limit=50", setTracks);
    }
  }, [authCtx]);

  return (
    <Main>
      <SidePanel />
      <section className="md:ml-24 px-8 md:px-14 bg-background w-full min-h-full py-8 md:py-14">
        <h1 className="text-white text-2xl font-semibold">Find all your most listened tracks</h1>
        {tracks && (
          <Suspense fallback={<h2>Loading data</h2>}>
            <ul className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 py-16">
              {tracks.map((track: { artists: any[]; name: string; duration_ms: number }) => {
                const { artists, name, duration_ms } = track;
                return <Track key={name + duration_ms} artists={artists} name={name} duration={duration_ms} />;
              })}
            </ul>
          </Suspense>
        )}
      </section>
    </Main>
  );
};

export default TopTracksPage;
