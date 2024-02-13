import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice"; // Upewnij się, że ścieżka do pliku jest prawidłowa

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
  type="tel"
  name="number"
  value={number}
  pattern="\+?[0-9\s\-]{7,}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  onChange={(e) => setNumber(e.target.value)}
  required
/>

      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
