import React from "react";
import { Header, EventContainer } from "../components/styles";
import AddEvent from "../containers/addEvent";
import RandomJoke from "../containers/randomJoke";
import ListEvent from "../containers/listEvent";

function Event() {
  return (
    <EventContainer>
      <Header>Events list</Header>
      <RandomJoke />
      <AddEvent />
      <ListEvent />
    </EventContainer>
  );
}
export default Event;
