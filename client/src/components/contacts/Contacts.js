import React, { useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default Contacts;
