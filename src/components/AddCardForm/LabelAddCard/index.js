import React from 'react';

import AddCardImage from '../../../assets/images/addCard.png';

import { Container, Image, Text } from './styles';

function LabelAddCard() {
  return (
    <Container>
      <Image src={AddCardImage} />
      <Text>Adicione um novo cartão de crédito</Text>
    </Container>
  );
}

export default LabelAddCard;