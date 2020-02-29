import React, { useContext } from 'react'
import { authContext } from "../contexts/authContext";
import { Wrapper } from "../components/styles";
import Login from "./login";
import Event from "./event";

function RootContainer() {
  const { auth } = useContext(authContext);
  return (
    <Wrapper>
      {auth.id ? <Event /> : null}
      {!auth.id && <Login />}
    </Wrapper>
  );
}
export default RootContainer;