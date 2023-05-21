"use client";
import { generateRandomString } from "@/Spotify/CodeVerifier";
import { calculateExpirationDate } from "@/utils/ExpirationDate/ExpirationDate";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import React from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "https://spotify-discovery-g17906ksw-sebastienstordeur.vercel.app/";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  authDataHandler: () => {},
  logout: () => {},
  checkTokenValidity: () => {},
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
  const router = useRouter();

  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email user-top-read playlist-read-private user-follow-read";
  const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}&show_dialog=true`;

  const login = async () => {
    window.location.href = spotifyUrl;
  };

  const authDataHandler: () => boolean = () => {
    if (window.location.hash) {
      const { access_token, expires_in } = getParamsFromAPI(window.location.hash);
      const expirationTime = calculateExpirationDate(+expires_in);

      localStorage.setItem("token", access_token);
      localStorage.setItem("expirationTime", JSON.stringify(expirationTime));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  const checkTokenValidity = () => {
    const currentTime = Date.now();
    const tokenExpirationTime = typeof localStorage !== "undefined" ? localStorage.getItem("expirationTime") : null;

    if (tokenExpirationTime && +tokenExpirationTime - currentTime < 0) {
      router.push("/");
    }
    return;
  };

  const values = { isAuthenticated, login, logout, authDataHandler, checkTokenValidity };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
