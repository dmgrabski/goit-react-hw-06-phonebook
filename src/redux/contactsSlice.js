import { createSlice, nanoid } from '@reduxjs/toolkit';

// Próba odczytania kontaktów z localStorage lub ustawienie domyślnych kontaktów
const savedContacts = localStorage.getItem("contacts");
const parsedContacts = JSON.parse(savedContacts) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: parsedContacts,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      // Dodanie nowego kontaktu do stanu
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      // Usunięcie kontaktu na podstawie id
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    refreshFilter: (state, action) => {
      // Aktualizacja stanu filtru
      state.filter = action.payload;
    },
  },
});

// Eksportowanie akcji generowanych przez slice
export const { addContact, deleteContact, refreshFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

