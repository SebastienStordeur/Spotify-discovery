import React, { useContext } from "react";
import { render, act, RenderHookResult, renderHook } from "@testing-library/react";
import AuthContextProvider, { AuthContext } from "./AuthContext";
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

describe("AuthContextProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  /* it("should render children components", () => {
    const ChildComponent = (): JSX.Element => <div>Child component</div>;

    const { getByText } = render(
      <AuthContext.Provider value={{ isAuthenticated: false }}>
        <AuthContextProvider>
          <ChildComponent />
        </AuthContextProvider>
      </AuthContext.Provider>
    );

    expect(getByText("Child component")).toBeInTheDocument();
  }); */

  /**
   * Logout
   */

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
