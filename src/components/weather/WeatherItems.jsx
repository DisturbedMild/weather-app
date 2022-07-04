import React, { useState, useEffect, useRef } from 'react';
import { Grid, Skeleton } from '@mui/material';

import useHttp from '../../hooks/useHttp';
import WeatherItem from './weatherItem/WeatherItem';

function transformKelvinsToCelsium(val) {
  const celsium = val - 273.15;
  return celsium.toFixed(1);
}

function WeatherItems({ defaultCities }) {
  const [cities, setCities] = useState([]);
  const { error,isLoading, sendRequest: fetchCities } = useHttp();

  let componentCreatedFlag = useRef(true);

  const updateDataHandler = (id) => {
    const itemIndex = cities.findIndex((el) => el.id === id);
    const updateCities = (item) => {
      const updatedItems = [...cities];
      updatedItems[itemIndex] = {
        weather: item.weather[0].main,
        temperatureInCelsium: transformKelvinsToCelsium(item.main.temp),
        feelsLikeInCelsium: transformKelvinsToCelsium(item.main.feels_like),
        id: item.id,
        name: item.name,
        country: item.sys.country,
        windSpeed: item.wind.speed,
      };
      setCities(updatedItems);
    };

    fetchCities(
      {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cities[itemIndex].name}&appid=93c64c0f1745440a167896326be70440`,
      },
      updateCities
    );
  };

  useEffect(() => {
    if (!componentCreatedFlag) {
      const updateCitiesData = (item) => {
        const newItem = {
          weather: item.weather[0].main,
          temperatureInCelsium: transformKelvinsToCelsium(item.main.temp),
          feelsLikeInCelsium: transformKelvinsToCelsium(item.main.feels_like),
          id: item.id,
          name: item.name,
          country: item.sys.country,
          windSpeed: item.wind.speed,
        };
        setCities((prevState) => [...prevState, newItem]);
      };

      for (let i = 0; i < defaultCities.length; i++) {
        fetchCities(
          {
            url: `https://api.openweathermap.org/data/2.5/weather?q=${defaultCities[i]}&appid=93c64c0f1745440a167896326be70440`,
          },
          updateCitiesData
        );
      }
    }
    return function cleanup() {
      componentCreatedFlag = false;
    };
  }, [fetchCities, cities]);
  return (
    <ul>
      <Grid container spacing={2}>
        {error && <p>{error}</p>}
        {cities.map((item) => (
          <Grid item xs={4} key={item.id}>
            {isLoading ? (
              <Grid item xs={4}>
                <Skeleton variant="rectangular" width={310} height={200} />
              </Grid>
            ) : (
              <WeatherItem
                item={{
                  id: item.id,
                  name: item.name,
                  temperatureInCelsium: item.temperatureInCelsium,
                  feelsLikeInCelsium: item.feelsLikeInCelsium,
                  weather: item.weather,
                  country: item.country,
                  windSpeed: item.windSpeed,
                }}
                onUpdatedDataHandler={updateDataHandler}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}

export default WeatherItems;
