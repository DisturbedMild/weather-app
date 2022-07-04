/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import classes from './WeatherItem.module.scss';

function WeatherItem({ item, onUpdatedDataHandler }) {

	const showDetailsHandler = (e) => {
		console.log(e.target.closest('li'));
	};
	
	const refreshDataHandler = (e) => {
		e.stopPropagation();
		onUpdatedDataHandler(item.id)
	};
	const removeItemHandler = (e) => {
		e.stopPropagation();
	};

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={classes.item} onClick={showDetailsHandler} >
      <p className={classes['item-city']}>
        {item.name}, {item.country}
      </p>
      <p className={classes['item-temperature']}>
        {item.temperatureInCelsium}℃, {item.weather}
      </p>
      <p className={classes['item-additional']}>
        <span>Wind.speed: </span>
        {item.windSpeed}m/s
      </p>
      <p className={classes['item-additional']}>
        <span>Feels Like: </span>
        {item.feelsLikeInCelsium}℃
      </p>
      <div className={classes['item-buttons']}>
        <button type="button" onClick={refreshDataHandler}>
          Refresh
        </button>
        <button type="button" onClick={removeItemHandler}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default WeatherItem;
