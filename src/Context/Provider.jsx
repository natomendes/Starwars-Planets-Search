import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from '.';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
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
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setfilterByNumericValues,
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const planetsResults = data.results;
      planetsResults.forEach((planet) => {
        delete planet.residents;
      });
      setPlanets(planetsResults);
    };
    fetchPlanets();
  }, []);
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
