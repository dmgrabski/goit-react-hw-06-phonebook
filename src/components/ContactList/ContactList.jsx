import React from "react";
import PropTypes from "prop-types";
const ContactList = ({ contacts, setContacts }) => {
  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};