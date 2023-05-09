"use client";
import { createContext, useState } from "react";
import React from "react";
/* import { useRouter } from "next/router"; */

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /* const router = useRouter(); */

  const login = () => {};

  const logout = () => {
    localStorage.clear();
    /* router.push("/"); */
  };

  const values = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
