import React from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
};

export default App;