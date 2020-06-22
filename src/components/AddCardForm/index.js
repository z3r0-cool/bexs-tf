import React from 'react';
import PropTypes from 'prop-types';

import LabelAddCard from './LabelAddCard';
import CardForm from './CardForm';

import 'react-credit-cards/es/styles-compiled.css';
import { Container, Div } from './styles';

function AddCardForm(props) {
  const { emitPayload, validations } = props;
  return (<Container>
    <LabelAddCard />
    <Div>
      <CardForm emitPayload={(data) => emitPayload(data)} validation={validations} />
    </Div>
  </Container>);
}

export default AddCardForm;

AddCardForm.propTypes = {
  emitPayload: PropTypes.func.isRequired,
  validations: PropTypes.shape(),
};


AddCardForm.defaultProps = {
  validations: {},
};