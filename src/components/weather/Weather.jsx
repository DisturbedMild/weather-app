import React from 'react';
import WeatherItems from './WeatherItems';

import classes from './Weather.module.scss';

const DEFAULT_CITIES = ['Kyiv', 'Kharkiv', 'Poltava', 'Paris','Lviv', 'Amsterdam', 'London', 'Krakov', 'Berlin','Warsaw']

function Weather() {
  return (
    <>
      <h2 className={classes.header}>Cities</h2>
      <WeatherItems defaultCities={DEFAULT_CITIES} />
    </>
  );
}

export default Weather;
