import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/contactsSlice'; // Upewnij się, że ścieżka jest poprawna

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Uaktualnienie, aby pasowało do struktury akcji po zmianach w contactsSlice
    dispatch(addContact({name, number})); // Przekazanie obiektu zamiast pojedynczych wartości
    setName("");
    setNumber("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeName}
        required
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeNumber}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
