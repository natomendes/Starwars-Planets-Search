import React, { useContext, useState } from 'react';
import AppContext from '../../Context';
import * as S from '../Header/styled';

const OrderBy = () => {
  const {
    columnOptions,
    setOrder,
  } = useContext(AppContext);
  const [{
    column,
    sort,
  }, setOrderForm] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const handleInput = ({ target: { name, value } }) => {
    setOrderForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <S.OrderLimiter>
      <S.Select
        data-testid="column-sort"
        value={ column }
        name="column"
        onChange={ handleInput }
      >
        {
          columnOptions
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

      <S.RadioButtons>
        <S.Label
          htmlFor="asc-order"
        >
          <S.Input
            type="radio"
            name="sort"
            id="asc-order"
            data-testid="column-sort-input-asc"
            value="ASC"
            onChange={ handleInput }
            checked={ sort === 'ASC' }

          />
          <S.Span>Ascendente</S.Span>
        </S.Label>
        <S.Label
          htmlFor="desc-order"
        >
          <S.Input
            type="radio"
            name="sort"
            id="desc-order"
            data-testid="column-sort-input-desc"
            value="DESC"
            onChange={ handleInput }
            checked={ sort === 'DESC' }
          />
          <S.Span>Descendente</S.Span>
        </S.Label>
      </S.RadioButtons>

      <S.Button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder({
          column,
          sort,
        }) }
      >
        Sort
      </S.Button>
    </S.OrderLimiter>

  );
};

export default OrderBy;
