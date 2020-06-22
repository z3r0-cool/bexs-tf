import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }

`;

export const Div = styled.div `
  width: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
`;