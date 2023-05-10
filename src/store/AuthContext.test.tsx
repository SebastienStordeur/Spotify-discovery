import React, { useContext } from "react";
import { render, act, RenderHookResult, renderHook } from "@testing-library/react";
import AuthContextProvider, { AuthContext } from "./AuthContext";
import "@testing-library/jest-dom";
import { generateRandomString } from "../Spotify/CodeVerifier";

/**
 * Mock the generateRandomString function
 */

/* jest.mock("@Spotify/CodeVerifier", () => ({
  generateRandomString: jest.fn(() => "mocked_random_string"),
}));
 */
/**
 * Auth Context Provider
 */

jest.mock("../Spotify/CodeVerifier", () => ({
  generateRandomString: jest.fn(() => "mockedrandomstring"),
}));

describe("AuthContextProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const contextValue = {
    isAuthenticated: false,
    login: () => {},
    authDataHandler: () => {},
    logout: () => {},
  };
  const ChildComponent = (): JSX.Element => <div>Child component</div>;

  it("should render children components", () => {
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <AuthContextProvider>
          <ChildComponent />
        </AuthContextProvider>
      </AuthContext.Provider>
    );

    expect(getByText("Child component")).toBeInTheDocument();
  });

  it("should generate a string on render", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <AuthContextProvider>
          <ChildComponent />
        </AuthContextProvider>
      </AuthContext.Provider>
    );
    expect(generateRandomString).toHaveBeenCalledWith(16);
  });

  // LOGIN
  describe("Login", () => {
    //TODO
    it("should redirect to Spotify login page", () => {
      window = Object.create(window);
      const url = "http://localhost:3000";
      Object.defineProperty(window, "location", {
        value: { href: url },
        writable: true,
      });

      expect(window.location.href).toEqual(url);
    });
  });

  // LOGOUT
  describe("Logout", () => {
    it("should set isAuthenticated to false on logout", () => {
      const { result } = renderHook(() => useContext(AuthContext), {
        wrapper: AuthContextProvider,
      });

      act(() => {
        result.current.logout();
      });

      expect(result.current.isAuthenticated).toBe(false);
    });

    it("should clear the localStorage on logout", () => {
      //Mock localStorage
      let localStorageMock: any = {};
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: (key: string) => localStorageMock[key],
          setItem: (key: string, value: string) => (localStorageMock[key] = value),
          removeItem: (key: string) => delete localStorageMock[key],
          clear: () => (localStorageMock = {}),
        },
        writable: true,
      });

      // Render the AuthContextProvider
      const { result } = renderHook(() => useContext(AuthContext), {
        wrapper: AuthContextProvider,
      });

      // Set some data in localStorage
      localStorage.setItem("token", "mocked_token");

      // Invoke the logout function
      act(() => {
        result.current.logout();
      });

      expect(localStorageMock).toEqual({});
    });
  });
});
