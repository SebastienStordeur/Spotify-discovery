"use client";
import { generateRandomString } from "@/Spotify/CodeVerifier";
import { createContext, useState } from "react";
import React from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  authDataHandler: () => {},
  logout: () => {},
});

const getParamsFromAPI = (hash: string) => {
  const stringBehindHash = hash.substring(1);
  const params = stringBehindHash.split("&");

  const splitUpParams = params.reduce((accumulator: Record<string, string>, currentValue: string) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});

  return splitUpParams;
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";
  const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}&show_dialog=true`;
  //const token = localStorage.getItem("token");

  const login = async () => {
    window.location.href = spotifyUrl;
  };

  const authDataHandler: () => boolean = () => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getParamsFromAPI(window.location.hash);
      localStorage.setItem("token", access_token);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.clear();
  };

  const values = { isAuthenticated, login, logout, authDataHandler };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
