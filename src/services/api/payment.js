import { apiUrl } from "./apiUrl";
import { getCookie } from "./getCookie";

export function createPay(paymentForm) {
  const token = getCookie('token');

  return fetch(apiUrl, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `Bearer ${token}`
  },
  body: JSON.stringify({
      action: 'payment',
      number_card: paymentForm.card.number,
      transfer_amount: paymentForm.transactionAmout,
      appointment: paymentForm.description,
      number_card_recipient: paymentForm.recipientCardNumber
  }),
  })
  .then(response => response.json())
  .catch(error => console.error('Помилка:', error.message));
}