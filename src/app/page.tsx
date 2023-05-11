"use client";
import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/store/AuthContext";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      //TODO: check for any
      const isAuthenticated: any = await authCtx.authDataHandler();
      if (isAuthenticated) {
        router.push("/profile");
      }
    };
    checkAuthentication();
  }, []);

  return (
    <div className="h-screen flex items-center overflow-hidden">
      <div className="max-w-md w-full mx-auto px-10 py-20 border min-h-3/5 relative overflow-hidden">
        <h1 className="font-semibold text-3xl">Sign in with your Spotify account</h1>
        <Button
          className="w-4/5 px-10 h-14 bg-accent text-white text-xl lg:text-3xl overflow-hidden rounded-full absolute top-1/2 transform-translate-x-1/2 -translate-y-1/2"
          onClick={authCtx.login}
        >
          Sign in with Spotify
        </Button>
      </div>
    </div>
  );
};

export default Home;
