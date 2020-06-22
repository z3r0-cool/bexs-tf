import React from 'react';
import BackScreen from './BackScreen';
import Breadcrumbs from './Breadcrumbs';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <BackScreen />
      <Breadcrumbs />
    </Container>
  )
}

export default Header;