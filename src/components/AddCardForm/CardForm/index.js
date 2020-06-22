import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Cards from 'react-credit-cards';
import { Container } from './styles';
import SimpleInput from '../../SimpleInput';
import SimpleSelect from '../../SimpleSelect';
import Grid from '../../Grid';
import SimpleButton from '../../SimpleButton';

function CardForm(props) {
  const { emitPayload, validation } = props;
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardValid, setCardValid] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [frontCard, setFronCard] = useState('name');
  const [installments, setInstallments] = useState('');
  const [optionsInstallments] = useState([
    {
      id: 1,
      value: '1x R$12.000,00 sem juros',
    },
    {
      id: 2,
      value: '2x R$6.000,00 sem juros',
    },
    {
      id: 3,
      value: '3x R$4.000,00 sem juros',
    },
    {
      id: 4,
      value: '4x R$3.000,00 sem juros',
    },
    {
    id: 5,
    value: '12x R$1.000,00 sem juros',
    }
  ]);

  const changeCardSide = (id) => {
    if (id === 4) {
      setFronCard('cvc');
    } else {
      setFronCard('name');
    }
  }

  const onFocusInput = (id) => {
    changeCardSide(id);
  }

  const onClick = () => {
    emitPayload({
      payload: {
        cardNumber,
        cardName,
        cardValid,
        cardCVV,
        installments,
      }
    })
  }

  return (
    <Container>
      <Grid container>
        <Grid xs={12} sm={6}>
          <Cards
            cvc={cardCVV}
            expiry={cardValid}
            focused={frontCard}
            name={cardName}
            number={cardNumber}
            locale={{
              valid: ''
            }}
            placeholders={{
              name: "NOME DO TITULAR",
            }}
      />
        </Grid>
        <Grid xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid xs={12} sm={12}>
              <SimpleInput changeValue={(val) => setCardNumber(val)} label="Número do cartão" mask="9999 9999 9999 9999" id={1} onFocus={onFocusInput} errorMessage={validation.cardNumber} />
            </Grid>
            <Grid xs={12} sm={12}>
              <SimpleInput changeValue={(val) => setCardName(val)} label="Nome (igual ao cartão)" mask="" id={2} onFocus={onFocusInput} errorMessage={validation.cardName} />
            </Grid>
            <Grid xs={6} sm={6}>
              <SimpleInput changeValue={(val) => setCardValid(val)} label="Validade" mask="99/99" id={3} onFocus={onFocusInput} errorMessage={validation.cardValid} />
            </Grid>
            <Grid xs={6} sm={6}>
              <SimpleInput changeValue={(val) => setCardCVV(val)} label="CVV" mask="999" id={4} onFocus={onFocusInput} errorMessage={validation.cardCVV} />
            </Grid>
            {
              optionsInstallments && (
                <Grid xs={12} sm={12}>
                  <SimpleSelect label="Número de parcelas" options={optionsInstallments} changeValue={(val) => setInstallments(val)} errorMessage={validation.installments} />
                </Grid>
              )
            }
            <Grid sm={5} xs={12}></Grid>
            <Grid sm={7} xs={12}>
            <SimpleButton onClick={onClick} label="CONTINUAR"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CardForm;

CardForm.propTypes = {
  emitPayload: PropTypes.func.isRequired,
  validation: PropTypes.shape(),
};

CardForm.defaultProps = {
  validation: {},
};