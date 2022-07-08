import React from 'react';
import CityItems from './CityItems';

import classes from './City.module.scss';

function City() {
  return (
    <>
      <h2 className={classes.header}>Cities</h2>
      <CityItems />
    </>
  );
}

export default City;
