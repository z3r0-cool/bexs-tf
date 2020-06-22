import React from 'react';

import { Container, Link, To } from './styles';
import { FaAngleLeft } from "react-icons/fa";

function BackScreen() {
  return (
    <To>
      <Container>
        <FaAngleLeft size={20} color="white" style={{marginRight: '14px'}} />
        <Link>Alterar forma de pagamento</Link>
      </Container>
    </To>
  );
}

export default BackScreen; 