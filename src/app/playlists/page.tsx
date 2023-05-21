"use client";
import Main from "@/components/Layout/Main/Main";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Playlist from "@/components/Playlists/Playlist/Playlist";
import { AuthContext } from "@/store/AuthContext";
import { getDataFromAPI } from "@/utils/GetInformationsApi/GetInformationAPI";
import React, { FC, Suspense, useContext, useEffect, useState } from "react";

const PlaylistPage: FC = () => {
  const authCtx = useContext(AuthContext);
  authCtx.checkTokenValidity();
  const [playlists, setPlaylists] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      authCtx.checkTokenValidity();
      getDataFromAPI("https://api.spotify.com/v1/me/playlists", setPlaylists);
    }
  }, [authCtx]);

  return (
    <Main>
      <SidePanel />
      <section className="md:ml-24 px-8 md:px-14 bg-background w-full min-h-full py-8 md:py-14">
        <h1 className="text-white text-2xl font-semibold">Find all your playlists</h1>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 py-8 md:py-16">
          {playlists && (
            <Suspense fallback={<h2>Loading data</h2>}>
              {!playlists && <p>You don&apos;t have any playlist to showcase.</p>}
              {playlists.map((playlist: any) => {
                return <Playlist key={playlist.id} playlist={playlist} />;
              })}
            </Suspense>
          )}
        </div>
      </section>
    </Main>
  );
};

export default PlaylistPage;
