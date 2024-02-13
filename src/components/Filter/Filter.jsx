import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshFilter } from "../../redux/contactsSlice"; // Dostosuj ścieżkę

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleFilterChange = (e) => {
    dispatch(refreshFilter(e.target.value));
  };

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
