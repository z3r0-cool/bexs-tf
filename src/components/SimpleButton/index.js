import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../utils/constants/Colors';
import { Button } from './styles';

function SimpleButton(props) {
  const { label, onClick, background } = props;
  return (
    <Button background={background} onClick={() => onClick()}>{label}</Button>
  );
}

export default SimpleButton;

SimpleButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  background: PropTypes.string,
};

SimpleButton.defaultProps = {
  label: 'Label',
  background: Colors.primaryColor,
};
