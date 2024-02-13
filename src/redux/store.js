import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import { loadState, saveState } from '../redux/localStorage'; // Funkcje do obsługi localStorage

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
