import React from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import Provider from './Context/Provider';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
