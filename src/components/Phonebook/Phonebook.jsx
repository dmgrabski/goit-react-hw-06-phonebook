import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
    const defaultContacts = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
    return parsedContacts || defaultContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const handleSubmit = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts =
    contacts.length > 0
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={handleFilter} />
        <Contacts contacts={filteredContacts} setContacts={setContacts} />
      </Section>
    </>
  );
};

export default Phonebook;