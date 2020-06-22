import React, { useState } from 'react';
import { Container } from '../../../components/Container/styles';
import Header from '../../../components/Header';
import AddCardForm from '../../../components/AddCardForm';

import PaymentService from '../../../services/Payment';

const Payment = () => {
  const [validationObject, setValidationObject] = useState({});
  const validations = ({ cardNumber, cardName, cardValid, cardCVV, installments }) => {
    // Validar numero do cartao
    if (cardNumber.length < 19 ) {
      setValidationObject({ ...validationObject, cardNumber: 'Número de cartão inválido'});
      validationObject.cardNumber = 'Número de cartão inválido';
    } else {
      validationObject.cardNumber = '';
    }

    // Validar nome no cartao
    if (cardName.length < 3) {
      validationObject.cardName = 'Insira seu nome completo';
    } else {
      validationObject.cardName = '';
    }

    // Validar validade do cartao
    if (cardValid.length < 5) {
      validationObject.cardValid = 'Data inválida';
    } else {
      validationObject.cardValid = '';
    }

    // Validar CVV do cartao
    if (cardCVV.length < 3) {
      validationObject.cardCVV = 'Código inválido';
    } else {
      validationObject.cardCVV = '';
    }

    // Validar parcelas do cartao
    if (installments === '') {
      setValidationObject({ ...validationObject, installments: 'Insira o número de parcelas' });
    } else {
      setValidationObject({ ...validationObject, installments: '' });
    }
  }

  const PayloadPost = async (data) => {
    validations(data.payload);
    const POST = await PaymentService.postPayment(data);
  };

  return (
    <Container>
      <Header />
      <AddCardForm emitPayload={PayloadPost} validations={validationObject} />
    </Container>
  );
}

export default Payment;