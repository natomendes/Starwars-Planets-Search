import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from '.';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    planets,
    setPlanets,
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
