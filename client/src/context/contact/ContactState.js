import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 2,
        name: "Dindo de vó",
        email: "dindo@gmail.com",
        phone: "2222222222",
        type: "personal",
      },
      {
        id: 3,
        name: "Beca",
        email: "beca@gmail.com",
        phone: "333333333",
        type: "personal",
      },
      {
        id: 4,
        name: "Fuba",
        email: "fuba@gmail.com",
        phone: "55555555555555",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact

  //delete contact

  //set current contact

  //clear contact

  //update contact

  //filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
