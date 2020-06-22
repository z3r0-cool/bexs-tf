import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

`;
