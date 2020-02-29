import React, { createContext, useReducer } from "react";

const initialState = { eventList: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        eventList: [...state.eventList, action.payload]
      };
    case "UPDATE":
      return {
        eventList: state.eventList.map(event => {
          if (event.id === action.payload.id) {
            return { ...event, complete: !event.complete };
          }
          return event;
        })
      };
    case "DELETE":
      return {
        eventList: state.eventList.filter(event => event.id !== action.payload.id)
      };
    default:
      throw new Error();
  }
};
export const eventContext = createContext({
  state: {
    eventList: []
  },
  updateEventList: () => {}
});
const { Provider } = eventContext;
const EventProvider = ({ children }) => {
  const [eventList, updateEventList] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state: eventList, updateEventList }}>{children}</Provider>
  );
};

export default EventProvider;
