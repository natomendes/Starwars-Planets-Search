import React, { useContext } from 'react';
import AppContext from '../../Context';
import * as s from './styled';

const Table = () => {
  const { planets, filterByName } = useContext(AppContext);

  const filteredPlanets = () => planets
    .filter(({ name }) => name
      .toLowerCase()
      .includes(filterByName.toLowerCase()));
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
            filteredPlanets().map((planet) => (
              <s.TRow key={ planet.name }>
                {Object
                  .values(planet)
                  .map((value, i) => <s.TD key={ i }>{ value }</s.TD>)}
              </s.TRow>
            ))
          }

        </s.TBody>
      </s.PlanetsTable>
    </s.Wrapper>
  );
};

export default Table;
