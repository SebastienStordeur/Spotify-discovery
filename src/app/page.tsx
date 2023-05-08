"use client";
import { NextPage } from "next";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
  };

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <button className="border-2">TEST</button>
    </div>
  );
};

export default Home;
