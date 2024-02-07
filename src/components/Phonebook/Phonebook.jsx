import React from "react";
import Section from "../Section/Section";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const Phonebook = ({ filter, filteredContacts, onFilterChange, onSubmit, setContacts, onDelete }) => {
  
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={onFilterChange} />
        <Contacts contacts={filteredContacts} onDelete={onDelete} />
      </Section>
    </>
  );
};

export default Phonebook;