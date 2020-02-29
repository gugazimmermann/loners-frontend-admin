import React, { useContext , Fragment} from "react";
import { eventContext } from "../contexts/eventsContext";
import { EventItem } from "../components/styles";

const ListEvent = () => {
  const { state, updateEventList } = useContext(eventContext);
  return (
    <Fragment>
      {state.eventList.map(({ id, event, complete }) => {
        return (
          <EventItem
            key={id}
            onClick={() =>
              updateEventList({
                type: "UPDATE",
                payload: { id }
              })
            }
            complete={complete}
          >
            - {event}
          </EventItem>
        );
      })}
    </Fragment>
  );
};
export default ListEvent;
