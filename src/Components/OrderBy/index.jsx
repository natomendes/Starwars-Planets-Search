import React, { useContext } from 'react';
import AppContext from '../../Context';
import * as S from '../Header/styled';

const OrderBy = () => {
  const { columnOptions } = useContext(AppContext);

  return (
    <S.OrderLimiter>
      <S.Select>
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
            name="order"
            id="asc-order"
          />
          <S.Span>Ascendente</S.Span>
        </S.Label>
        <S.Label
          htmlFor="desc-order"
        >
          <S.Input
            type="radio"
            name="order"
            id="desc-order"
          />
          <S.Span>Descendente</S.Span>
        </S.Label>
      </S.RadioButtons>

      <S.Button
        type="button"
      >
        Sort
      </S.Button>
    </S.OrderLimiter>

  );
};

export default OrderBy;
