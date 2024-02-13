import React from "react";
import Section from "../Section/Section";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { refreshFilter } from "../../redux/contactsSlice";

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const handleFilter = (e) => {
    dispatch(refreshFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={handleFilter} />
        <Contacts contacts={filteredContacts} />
      </Section>
    </>
  );
};

export default Phonebook;
