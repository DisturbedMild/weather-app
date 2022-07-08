import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import CityItem from './cityItem/CityItem';
import addNewCity from '../../store/actions/addNewCity';

function CityItems() {
  const dispatch = useDispatch();
  const citiesSelector = useSelector((state) => state.city.cities);

  let componentCreatedFlag = useRef(true);

  const items = JSON.parse(localStorage.getItem('items'));

  useEffect(() => {
    if (!componentCreatedFlag) {
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const localStorageItem = items[i];
          dispatch(addNewCity(localStorageItem.name));
        }
      }
    }
    return function cleanup() {
      componentCreatedFlag = false;
    };
  }, []);
  return (
    <ul>
      {!items && <p>You didn&apos;t add any cities yet.</p>}
      {items && (
        <Grid container spacing={0} rowSpacing={3} columnSpacing={3}>
          {citiesSelector.map((item) => (
            <Grid item sm={4} xl={4} key={item.id}>
              <CityItem cities={citiesSelector} item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </ul>
  );
}

export default CityItems;
