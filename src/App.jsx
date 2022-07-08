import React from 'react';
import { Container } from '@mui/material';
import Header from './components/layout/Header';
import Cities from './components/city/Cities';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="xl">
          <Cities />
        </Container>
      </main>
    </>
  );
}

export default App;
