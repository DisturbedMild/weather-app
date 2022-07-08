import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import addNewCity from '../../store/actions/addNewCity';
import classes from './CitySearchForm.module.scss';

function CitySearch() {
  const dispatch = useDispatch();
  const searchInputTextRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const searchedCity = searchInputTextRef.current.value;

    if (searchedCity.trim().length !== 0) {
      dispatch(addNewCity(searchedCity));
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <input
        type="text"
        ref={searchInputTextRef}
        placeholder="Search your city..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default CitySearch;
