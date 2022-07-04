import React from 'react';
import { Container } from '@mui/material';
import Header from './components/layout/Header';
import Weather from './components/weather/Weather';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth='xl'>
          <Weather />
        </Container>
      </main>
    </>
  );
}

export default App;
