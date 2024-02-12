import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Redux/contactsSlice';
import { loadState, saveState } from '../Redux/localStorage'; // Funkcje do obsługi localStorage

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts
  });
});
