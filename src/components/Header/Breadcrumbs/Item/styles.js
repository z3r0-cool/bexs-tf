import styled from 'styled-components';
import Colors from '../../../../utils/constants/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Circle = styled.div`
  border-radius: 300px;
  background: ${({ active }) => active ? Colors.primaryColor : Colors.secundaryColor};
  height: 22px;
  width: 22px;
  border: 1.3px solid ${Colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p `
  color: ${Colors.primaryColor};
  font-size: 13px;
  margin-left: 8px;
`;

export const NumberIndex = styled.p`
  color: ${Colors.primaryColor};
  font-size: 13px;
  font-weight: 600;
`;
