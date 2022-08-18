import React, { useContext, useEffect, useMemo, useState } from 'react';
import * as S from './styled';
import logo from '../../Images/logoStarsWars3.png';
import logoPlanet from '../../Images/planetsLogo.png';
import AppContext from '../../Context';
import OrderBy from '../OrderBy';

const Header = () => {
  const {
    columnOptions,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setfilterByNumericValues,
  } = useContext(AppContext);

  const getColumns = useMemo(() => columnOptions
    .filter((option) => filterByNumericValues.every(({ column }) => column !== option)),
  [columnOptions, filterByNumericValues]);

  const [{
    column,
    comparison,
    valueInput,
  }, setFilterForm] = useState({
    column: getColumns[0],
    comparison: 'maior que',
    valueInput: 0,
  });

  const handleFilterForm = ({ target: { name, value } }) => {
    setFilterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const applyFilter = () => {
    setfilterByNumericValues((prevState) => ([
      ...prevState,
      {
        column,
        comparison,
        value: valueInput,
      },
    ]));
  };

  useEffect(() => {
    setFilterForm({
      column: getColumns[0],
      comparison: 'maior que',
      valueInput: 0,
    });
  }, [filterByNumericValues, getColumns]);

  const deleteFilter = (columnName) => {
    setfilterByNumericValues((prevState) => prevState
      .filter(({ column: filterColumn }) => filterColumn !== columnName));
  };

  const clearAllFilters = () => {
    setfilterByNumericValues([]);
  };

  return (
    <>
      <S.HeaderWrap>
        <S.LogoImg
          src={ logo }
        />
        <S.Wrapper>
          <S.Input
            type="text"
            placeholder="Search By Name"
            data-testid="name-filter"
            value={ filterByName }
            onChange={ ({ target: { value } }) => setFilterByName(value) }
          />
        </S.Wrapper>
        <S.LogoImg
          src={ logoPlanet }
        />
      </S.HeaderWrap>
      <S.ActiveFilters>
        {
          filterByNumericValues
            .map(({ column: fColumn, comparison: fComp, value }) => (
              <S.FilterTag
                key={ `${fColumn}${value} ` }
                data-testid="filter"
              >
                <S.FilterSpan>{ fColumn }</S.FilterSpan>
                <S.FilterSpan>{ fComp }</S.FilterSpan>
                <S.FilterSpan>{ value }</S.FilterSpan>
                <S.ClearButton
                  type="button"
                  onClick={ () => deleteFilter(fColumn) }
                >
                  x
                </S.ClearButton>
              </S.FilterTag>
            ))
        }
      </S.ActiveFilters>
      <S.FilterBar>
        <S.FormLimiter>
          <S.Select
            data-testid="column-filter"
            value={ column }
            name="column"
            onChange={ handleFilterForm }
          >
            {
              getColumns
                .map((value) => (
                  <S.Option
                    key={ value }
                    value={ value }
                  >
                    { value }
                  </S.Option>
                ))
            }
          </S.Select>

          <S.Select
            data-testid="comparison-filter"
            value={ comparison }
            name="comparison"
            onChange={ handleFilterForm }
          >
            <S.Option
              value="maior que"
            >
              maior que
            </S.Option>
            <S.Option
              value="menor que"
            >
              menor que
            </S.Option>
            <S.Option
              value="igual a"
            >
              igual a
            </S.Option>
          </S.Select>

          <S.Input
            type="number"
            placeholder="Type a Value"
            value={ valueInput }
            name="valueInput"
            onChange={ handleFilterForm }
            data-testid="value-filter"
          />
          <S.Button
            type="button"
            onClick={ () => applyFilter() }
            data-testid="button-filter"
          >
            Apply Filter
          </S.Button>
        </S.FormLimiter>
        <OrderBy />
        <S.ClearLimiter>
          <S.ClearAllButton
            type="button"
            onClick={ clearAllFilters }
            data-testid="button-remove-filters"
          >
            Clear All Filters
          </S.ClearAllButton>
        </S.ClearLimiter>
      </S.FilterBar>
    </>
  );
};

export default Header;
