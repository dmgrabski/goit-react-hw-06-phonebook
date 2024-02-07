import React, { useState, useEffect } from "react";
import "./index.css";
import Phonebook from "./components/Phonebook/Phonebook";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    } else {
      setContacts([
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (newContact) => {
    const isContactInTheList = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isContactInTheList) {
      setContacts((prevState) => [...prevState, newContact]);
    } else {
      alert("Contact with the same name already exists!");
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Phonebook
      contacts={contacts}
      filteredContacts={filteredContacts}
      filter={filter}
      onFilterChange={handleFilterChange}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
    />
  );
};

export default App;
