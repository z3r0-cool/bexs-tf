import styled from 'styled-components';
import Colors from '../../../utils/constants/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const Text = styled.p`
  color: ${Colors.secundaryColor};
  font-size: 20px;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 50%;
  }
`;