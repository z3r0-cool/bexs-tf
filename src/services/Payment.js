import axios from '../config/axios';

class PaymentSevice {
  async postPayment({ cardNumber, cardName, cardValid, cardCVV, installments  }) {
    try {
      const response = await axios.post(`/payment`, {
        paymentPayload: {
          cardNumber,
          cardName,
          cardValid,
          cardCVV,
          idInstallments: installments,
        }
      });

      return response;
    } catch (err) {
      return err;
    }
  }
}

export default new PaymentSevice();