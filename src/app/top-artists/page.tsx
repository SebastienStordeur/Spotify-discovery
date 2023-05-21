"use client";
import Main from "@/components/Layout/Main/Main";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Artist from "@/components/Playlists/Artist/Artist";
import { AuthContext } from "@/store/AuthContext";
import { getDataFromAPI } from "@/utils/GetInformationsApi/GetInformationAPI";
import { NextPage } from "next";
import React, { Suspense, useContext, useEffect, useState } from "react";

const TopArtistsPage: NextPage = () => {
  const [artists, setArtists] = useState<any>([]);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    authCtx.checkTokenValidity();
    getDataFromAPI("https://api.spotify.com/v1/me/top/artists?limit=50", setArtists);
  }, [authCtx]);

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
