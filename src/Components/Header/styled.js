import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  display: flex;
  font-size: 1.8rem;
  gap: 1rem;
`;

export const FilterTag = styled(Wrapper)`
  align-items: center;
  background: rgba(218, 168, 13, 0.4);
  border: 1px solid rgb(218, 168, 13);
  border-radius: 5px;
  color: red;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  padding-right: 2rem;
  justify-content: space-between;
  position: relative;
`;

export const ActiveFilters = styled(Wrapper)`
  min-height: 4rem;
  padding: 1rem;
  padding-top: 0;
  justify-content: center;
`;

export const FilterBar = styled(Wrapper)`
  justify-content: space-around;
  padding: 1rem;
`;

export const RadioButtons = styled(Wrapper)`
  flex-direction: column;
  gap: 0;
`;

export const FormLimiter = styled(Wrapper)`
  border-bottom: 1px solid rgb(255,50,80);
  /* border-left: 2px solid rgb(255,50,80); */
  /* border-right: 2px solid rgb(255,50,80); */
  border-radius: 5px;
  padding: 0.5rem 1rem;
  &::before {
    position: absolute;
    content: 'filter by';
    font-size: 1.2rem;
    font-style: italic;
    color: rgb(255,50,80);
    z-index: 1;
    transform: translate(10px, -18px);
  }
`;

export const OrderLimiter = styled(FormLimiter)`
  /* border-left: 2px solid rgb(255,50,80); */
  &::before {
    content: 'order by';
  }
`;

export const ClearLimiter = styled(FormLimiter)`
  &::before {
    content: ''
  }
`;

export const LogoImg = styled.img`
  width: 25rem;
`;

export const Span = styled.span`
  border: 1px solid rgba(0,0,0,0);
  color: rgb(218, 168, 13);
  font-size: 1.2rem;
  padding: 1px 2px;
  width: 100%;
`;

export const FilterSpan = styled.p`
  text-align: center;
  color: black;
`;

export const Input = styled.input`
  background-color: rgba(0 ,0 ,0, 0);
  border: 1px solid currentColor;
  border-radius: 5px;
  color: rgb(218, 168, 13);
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-align: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  outline: none;

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type=number] {
    width: 150px;
    padding: 0.5rem 1rem;
  }

  /* &[type=radio] {
    display: none;
  } */

  &[type=radio]:checked + ${Span} {
    border: 1px solid red;
    border-radius: 5px;
    color: rgb(255,50,80);
    padding: 1px 2px;
  }

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
  background: rgba(0 ,0 ,0, 0);
  border: 1px solid currentColor;
  border-radius: 5px;
  color: rgb(218, 168, 13);
  cursor: pointer;
  font-weight: 700;
  padding: 0.5rem;
  text-align: center;
  &:focus {
    border-color: rgba(0,0,0,0);
    outline: 2px solid red;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  & option {
    background: black;
    padding: 0.5rem;
  }
`;

export const Option = styled.option`
    background: black;
    padding: 0.5rem;
    font-weight: 600;
`;

export const Button = styled.button`
  background: rgba(0 ,0 ,0, 0);
  border: 1px solid currentColor;
  border-radius: 5px;
  color: rgb(200, 255, 0);
  cursor: pointer;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  &:hover {
    color: rgb(80, 255, 0);
  }

  &:active {
    -webkit-transition: 0.15s;
    transition: 0.15s;
    color: white;
  }
`;

export const ClearAllButton = styled(Button)`
  color: rgb(255,50,80);
  &:hover {
    color: red;
  }
  &:active {
    -webkit-transition: 0.15s;
    transition: 0.15s;
    color: white;
  }
`;

export const ClearButton = styled(ClearAllButton)`
  border: none;
  padding: 0;
  position: absolute;
  top: 0.1rem;
  right: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  gap: 0.5rem;
`;
