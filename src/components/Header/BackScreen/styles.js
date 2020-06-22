import styled from 'styled-components';
import Colors from '../../../utils/constants/Colors';

export const Link = styled.p`
  color: ${Colors.secundaryColor};
  display: block;
  font-size: 13px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0%;
    left: 0;
  }
`;

export const To = styled.a`
  cursor: pointer;
`;
