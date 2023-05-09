"use client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { generateRandomString } from "@/Spotify/CodeVerifier";

const Home: NextPage = () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectUri = "http://localhost:3000/";

  const getParamFromAPI = (hash: string) => {
    const string = hash.substring(1); //string after hash #
    const params = string.split("&");

    const splitUpParams = params.reduce((acc: any, currentValue: string) => {
      const [key, value]: any = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});

    return splitUpParams;
  };

  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&show_dialog=true`;

  const handleLogin = () => {
    window.location = url;
  };

  useEffect(() => {
    if (window !== "undefined" && window.location.hash) {
      const { access_token, expires_in, token_type } = getParamFromAPI(
        window.location.hash
      );
      localStorage.clear();
      localStorage.setItem("token", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expires_in", expires_in); // will recalculate the time to send another request to get a new token once
    }
  }, [getParamFromAPI]);
  return (
    <div>
      <button className="border-2" onClick={handleLogin}>
        TEST
      </button>
    </div>
  );
};

export default Home;
