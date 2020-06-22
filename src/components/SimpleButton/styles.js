import styled from 'styled-components';
import Colors from '../../utils/constants/Colors';

export const Button = styled.button`
  background: ${({ background }) => background};
  height: 51px;
  width: 100%;
  color: ${Colors.secundaryColor};
  font-size: 17px;
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;