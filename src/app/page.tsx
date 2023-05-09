"use client";
import { NextPage } from "next";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/store/AuthContext";

const Home: NextPage = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const checkAuthentication = async () => {
      //check for any
      const isAuthenticated: any = await authCtx.authDataHandler();
      if (isAuthenticated) {
        window.location.href = "http://localhost:3000/profile";
      }
    };
    checkAuthentication();
  }, []);

  return (
    <div>
      <button className="border-2" onClick={authCtx.login}>
        TEST
      </button>
    </div>
  );
};

export default Home;
