import React, { useContext } from 'react';
import AppContext from '../../Context';
import * as s from './styled';

const Table = () => {
  const {
    planets,
    filterByName,
    filterByNumericValues,
    order,
  } = useContext(AppContext);

  const filteredPlanets = filterByNumericValues
    .reduce((acc, { column, comparison, value }) => {
      if (comparison === 'maior que') {
        return acc.filter((planet) => Number(planet[column]) > Number(value));
      }
      if (comparison === 'menor que') {
        return acc.filter((planet) => Number(planet[column]) < Number(value));
      }
      return acc.filter((planet) => Number(planet[column]) === Number(value));
    }, planets)
    .filter(({ name }) => name
      .toLowerCase()
      .includes(filterByName.toLowerCase()));

  const sortedPlanets = () => {
    if (!order) return filteredPlanets;
    const { column, sort } = order;
    const unk = [];
    return filteredPlanets.filter((planet) => {
      if (planet[column] === 'unknown') {
        unk.push(planet);
        return false;
      }
      return true;
    })
      .sort((a, b) => (sort === 'DESC'
        ? b[column] - a[column]
        : a[column] - b[column]))
      .concat(unk);
  };

  return (
    <s.Wrapper>
      <s.PlanetsTable>
        <s.THead>
          <s.TRow>
            <s.TH>Name</s.TH>
            <s.TH>Rotation Period</s.TH>
            <s.TH>Orbital Period</s.TH>
            <s.TH>Diameter</s.TH>
            <s.TH>Climate</s.TH>
            <s.TH>Gravity</s.TH>
            <s.TH>Terrain</s.TH>
            <s.TH>Surface Water</s.TH>
            <s.TH>Population</s.TH>
            <s.TH>Films</s.TH>
            <s.TH>Created</s.TH>
            <s.TH>Edited</s.TH>
            <s.TH>URL</s.TH>
          </s.TRow>
        </s.THead>
        <s.TBody>
          {
            sortedPlanets().map((planet) => (
              <s.TRow key={ planet.name }>
                {Object
                  .values(planet)
                  .map((value, i) => (
                    i === 0
                      ? (
                        <s.TD
                          key={ i }
                          data-testid="planet-name"
                        >
                          { value }

                        </s.TD>)
                      : <s.TD key={ i }>{ value }</s.TD>
                  ))}
              </s.TRow>
            ))
          }

        </s.TBody>
      </s.PlanetsTable>
    </s.Wrapper>
  );
};

export default Table;
