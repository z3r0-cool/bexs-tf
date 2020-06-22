import React, { useState } from 'react';
import Item from './Item';

import { Container, StepResponsive } from './styles';
import StepsCheckout from '../../../utils/constants/StepsCheckout';

function Breadcrumbs() {
  const [step] = useState(2);
  return (
    <Container>
      {
        StepsCheckout.steps.length > 0 && StepsCheckout.steps.map((item, index, arr) => {
          return (
            <Item active={!!(index === 0)} index={index + 1} label={item.label} key={item.label} last={arr.length === index + 1} />
          )
        })
      }
      <StepResponsive><b>{`Etapa ${step}`}</b> {`de ${StepsCheckout.steps.length}`}</StepResponsive>
    </Container>
  );
}

export default Breadcrumbs;