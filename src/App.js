import React from 'react';
import Provider from './Context/Provider';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Provider>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
