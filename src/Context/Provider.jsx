import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from '.';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [columnOptions] = useState([
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ]);

  const contextValue = {
    planets,
    setPlanets,
    columnOptions,
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
