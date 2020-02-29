import { useState } from "react";
import { DEFAULT_USER_AUTH } from "./consts";

const useAuthHandler = initialState => {
  const [auth, setAuth] = useState(initialState);
  const setAuthStatus = userAuth => {
    window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };
  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };
  return {
    auth,
    setAuthStatus,
    setUnauthStatus
  };
};
export default useAuthHandler;
