import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { refreshFilter } from '../Redux/contactsSlice'; // Poprawny import


const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(refreshFilter(e.target.value)); // Używamy `refreshFilter`
  };

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
