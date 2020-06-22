import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ContainerComponent(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}

export default ContainerComponent;

ContainerComponent.propTypes = {
  children: PropTypes.node,
};

ContainerComponent.defaultProps = {
  children: '',
};