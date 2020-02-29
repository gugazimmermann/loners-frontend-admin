import * as validator from "validator";
import { DEFAULT_USER_AUTH } from "./consts";

export const apiRequest = async (url, method, bodyParams) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: bodyParams ? JSON.stringify(bodyParams) : undefined
  });
  return await response.json();
};

export const validateLoginForm = (email, password, setError) => {
  if (!email || !password) {
    setError("Entre com E-Mail e Senha válidos.");
    return false;
  }

  if (!validator.isEmail(email)) {
    setError("Entre com um E-Mail válido!.");
    return false;
  }
  return true;
};

export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};
