import React, { useRef } from 'react';

import classes from './WeatherSearchForm.module.scss';

function WeatherSearch() {

	const searchInputTextRef = useRef();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const searchedCity = searchInputTextRef.current.value;
		
		if(searchedCity.trim().length !== 0) {
			console.log(searchedCity);
		} 
	}

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <input type="text" ref={searchInputTextRef} placeholder="Search your city..." />
			<button type='submit'>Search</button>
    </form>
  );
}

export default WeatherSearch;
