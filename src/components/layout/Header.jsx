import React from 'react';
import { Container } from '@mui/material';
import CitySearch from '../city/CitySearchForm';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.heading}>
      <Container maxWidth='xl' classes={{root: style.flex}}>
        <h1>Weather App</h1>
        <CitySearch />
      </Container>
    </header>
  );
}

export default Header;
