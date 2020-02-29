import React from "react";
import RootContainer from "./components/rootContainer";
import AuthContextProvider from "./contexts/authContext";
import EventProvider from "./contexts/eventsContext";

function App() {
  return (
    <AuthContextProvider>
      <EventProvider>
        <RootContainer />
      </EventProvider>
    </AuthContextProvider>
  );
}

export default App;
