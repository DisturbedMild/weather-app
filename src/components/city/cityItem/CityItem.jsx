/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import updateCityWeather from '../../../store/actions/updateCityData';
import transformKelvinsToCelsium from '../../../features/TransformTemperature';
import classes from './CityItem.module.scss';


function CityItem({ item }) {
  const dispatch = useDispatch();
  const uiSelector = useSelector((state) => state.ui);
  const showDetailsHandler = (e) => {
    console.log(e.target.closest('li'));
  };

  const updateCityHandler = (e) => {
    e.stopPropagation();
    dispatch(updateCityWeather(item.name));
  };

  const removeItemHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <li
      className={classes.item}
      onClick={showDetailsHandler}
      onKeyDown={showDetailsHandler}
    >
      {uiSelector.isLoading && <CircularProgress />}
      {!uiSelector.isLoading && (
        <>
          <p className={classes['item-city']}>
            {item.name}, {item.sys.country}
          </p>
          <p className={classes['item-temperature']}>
            {transformKelvinsToCelsium(item.main.temp)}℃, {item.weather.main}
          </p>
          <p className={classes['item-additional']}>
            <span>Wind.speed: </span>
            {item.wind.speed}m/s
          </p>
          <p className={classes['item-additional']}>
            <span>Feels Like: </span>
            {transformKelvinsToCelsium(item.main.feels_like)}℃
          </p>
          <div className={classes['item-buttons']}>
            <button type="button" onClick={updateCityHandler}>
              Refresh
            </button>
            <button type="button" onClick={removeItemHandler}>
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default CityItem;
