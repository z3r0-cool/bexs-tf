import React from 'react';
import PropTypes from 'prop-types';

import { Container, Circle, Text, NumberIndex } from './styles';
import { FaCheck, FaAngleRight } from "react-icons/fa";

import Colors from '../../../../utils/constants/Colors';

function Item(props) {
  const{ active, label, index, last } = props;
  return (
    <Container>
      <Circle active={active}>
        {
          active
          ? (
              <FaCheck size={13} color="white" />
          ) : (
              <NumberIndex>{index}</NumberIndex>
          )
        }
      </Circle>
      <Text>
        {label}
      </Text>
      {
        !last && <FaAngleRight color={Colors.primaryColor} size={20} style={{ marginLeft: 24, marginRight: 24 }} />
      }
    </Container>
  );
}

export default Item;

Item.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  index: PropTypes.number,
  last: PropTypes.bool,
};

Item.defaultProps = {
  active: false,
  label: '',
  index: 0,
  last: 0,
};