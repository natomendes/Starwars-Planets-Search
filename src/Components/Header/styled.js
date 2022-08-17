import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  color: white;
`;

export const LogoImg = styled.img`
  width: 25rem;
`;

export const Input = styled.input`
  background-color: rgba(0 ,0 ,0, 0);
  border: 2px solid currentColor;
  border-radius: 5px;
  color: rgb(218, 168, 13);
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  text-align: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  outline: none;

  &::placeholder {
    text-align: center;
    color: rgba(218, 168, 13, 0.3);
    opacity: 1;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:focus {
    border-color: rgba(0,0,0,0);
    outline: 2px solid red;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

export const Select = styled.select`
  background-color: rgba(0 ,0 ,0, 0);
  border: 2px solid currentColor;
  border-radius: 5px;
  color: rgb(218, 168, 13);
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
`;
