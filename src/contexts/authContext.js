import React, { createContext } from "react";
import useAuthHandler from "../utils/authHandler";
import { DEFAULT_USER_AUTH } from "../utils/consts";
import { getStoredUserAuth } from "../utils/helpers";

export const authContext = createContext({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {}
});

const { Provider } = authContext;

const AuthProvider = ({ children }) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );
  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};
export default AuthProvider;
