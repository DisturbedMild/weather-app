/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import updateCityWeather from '../../../store/actions/updateCityData';
import { removeCity } from '../../../store/reducers/citySlice';

import BaseDialog from '../../ui/BaseDialog';
import transformKelvinsToCelsium from '../../../features/TransformTemperature';

import classes from './CityItem.module.scss';

function CityItem({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const uiSelector = useSelector((state) => state.ui);

  const showDetailsHandler = (e) => {
    if (e.target.closest('li')) {
      setModalIsOpen(true);
    }
  };

  const updateCityHandler = (e) => {
    e.stopPropagation();
    dispatch(updateCityWeather(item.name));
  };

  const removeItemHandler = (e) => {
    e.stopPropagation();
    dispatch(removeCity(item.name));
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <li className={classes.item} onClick={showDetailsHandler}>
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
      <BaseDialog open={modalIsOpen} onClick={closeModalHandler}>
        <p className={classes['item-city']}>
          {item.name}, {item.sys.country}.&nbsp;
          <span>
            Cords: lat.{item.coord.lat} | lon.{item.coord.lon}
          </span>
        </p>
        <p className={classes['item-temperature']}>
          {transformKelvinsToCelsium(item.main.temp)} ℃,&nbsp;
          {item.weather[0].description}
        </p>
        <p className={classes['item-additional']}>
          <span>Feels Like: </span>
          {transformKelvinsToCelsium(item.main.feels_like)}℃,
        </p>

        <p className={classes['item-additional']}>
          <span>Temp Min:</span> {transformKelvinsToCelsium(item.main.temp_min)}
          ℃,&nbsp;
          <span>Temp Max:</span> {transformKelvinsToCelsium(item.main.temp_max)}
          ℃
        </p>
        <p className={classes['item-additional']}>
          <span>Wind.speed: </span>
          {item.wind.speed}m/s,&nbsp;
          <span>Gust:</span> {item.wind.gust}
        </p>
      </BaseDialog>
    </>
  );
}

export default CityItem;
