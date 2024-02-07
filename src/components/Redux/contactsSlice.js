import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        // Przygotowanie akcji pozwala na generowanie ID wewnątrz reduktora,
        // co zapewnia unikalność identyfikatorów
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      // Filtracja kontaktów, aby usunąć kontakt o danym ID
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    refreshFilter: (state, action) => {
      // Aktualizacja stanu filtra na podstawie akcji
      state.filter = action.payload;
    },
  },
});

// Eksportowanie akcji generowanych przez slice
export const { addContact, deleteContact, refreshFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
