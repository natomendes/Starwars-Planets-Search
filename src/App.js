import React from 'react';
import Header from './Components/Header';
import Provider from './Context/Provider';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Header />
    </Provider>
  );
}

export default App;
