import React, { useContext } from 'react';
import * as S from './styled';
import logo from '../../Images/logoStarsWars3.png';
import logoPlanet from '../../Images/planetsLogo.png';
import AppContext from '../../Context';

const Header = () => {
  const { planets } = useContext(AppContext);

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
          />
        </S.Wrapper>
        <S.LogoImg
          src={ logoPlanet }
        />
      </S.HeaderWrap>
      <S.Wrapper>
        <p>test</p>
      </S.Wrapper>
    </>
  );
};

export default Header;
