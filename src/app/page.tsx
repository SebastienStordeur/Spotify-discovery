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
    <div className="h-screen flex justify-center items-center overflow-hidden bg-background">
      <Button
        className="w-30 px-10 h-12 md:h-14 bg-accent hover:brightness-110 transition-all duration-500 text-white text-xl lg:text-2xl overflow-hidden rounded-full absolute top-1/2 transform-translate-x-1/2 -translate-y-1/2"
        onClick={authCtx.login}
        aria-label="Sign in with Spotify"
      >
        Sign in with Spotify
      </Button>
    </div>
  );
};

export default Home;
