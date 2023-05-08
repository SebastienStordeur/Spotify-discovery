"use client";
import axios from "axios";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { generateRandomString } from "./utils/Spotify/CodeVerifier";

const Home: NextPage = () => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirectUri = "http://localhost:3000/";
  const params = useParams();

  generateRandomString(15);

  const authData = {
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  };

  const fetchSpotifyToken = () => {
    axios
      .post("https://accounts.spotify.com/api/token", authData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => console.log(response));
  };

  const authenticatedUser = () => {};

  useEffect(() => {
    fetchSpotifyToken();
  }, []);

  return (
    <div>
      <button className="border-2">TEST</button>
    </div>
  );
};

export default Home;
