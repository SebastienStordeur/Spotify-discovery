"use client";
import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

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
      </div>
    </main>
  );
};

export default page;
