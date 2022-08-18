import React, { useContext } from 'react';
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
  } = useContext(AppContext);

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
      <S.ActiveFilters />
      <S.FilterBar>
        <S.FormLimiter>
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

          <S.Select>
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
          />
          <S.Button
            type="button"
          >
            Apply Filter
          </S.Button>
        </S.FormLimiter>
        <OrderBy />
        <S.ClearLimiter>
          <S.ClearButton
            type="button"
          >
            Clear All Filters
          </S.ClearButton>
        </S.ClearLimiter>
      </S.FilterBar>
    </>
  );
};

export default Header;
