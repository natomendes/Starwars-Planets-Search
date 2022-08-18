import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  overflow-x: auto;
`;

export const PlanetsTable = styled.table`
  color: rgb(218, 168, 13);
  min-width: calc(100vw - 2rem);
  border-collapse: collapse;
  font-size: 1.2rem;
`;

export const THead = styled.thead`
  /* border-bottom: 2px solid rgb(218, 168, 13); */
  background-color: rgb(218, 168, 13);
  color: black;
`;

export const TRow = styled.tr`
    text-align: center;
    &:not(thead tr, :last-child) {
    border-bottom: 1px solid rgb(218, 168, 13);
  }
`;

export const TH = styled.th`
  padding: 1rem;
`;

export const TBody = styled.tbody`
  color: rgb(255,50,80);
`;

export const TD = styled.td`
  padding: 5px 0;
`;
