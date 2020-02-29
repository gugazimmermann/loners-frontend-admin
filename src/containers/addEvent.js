import React, { useContext, useRef } from "react";
import { Button, Form } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { eventContext } from "../contexts/eventsContext";
import ErrorMessage from "../components/errorMessage";
import { Input } from "../components/styles";
import useErrorHandler from "../utils/errorHandler";

const AddEvent = () => {
  const { updateEventList } = useContext(eventContext);
  const { error, showError } = useErrorHandler(null);
  const textInput = useRef(null);
  const addNewEventItem = () => {
    if (textInput.current) {
      const event = textInput.current.value;
      updateEventList({ type: "ADD", payload: { id: uuidv4(), event } });
      textInput.current.value = "";
    } else {
      showError("Please type an Event before clicking add.");
    }
  };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addNewEventItem();
      }}
    >
      <Input type="text" ref={textInput} placeholder="Add Event item" />
      <Button type="submit" block={true}>
        Add
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
};
export default AddEvent;
