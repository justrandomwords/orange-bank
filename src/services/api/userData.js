import { historyPlug } from '../plugs/history';
import { apiUrl } from './apiUrl';
import { getCookie } from './getCookie';

export function getTransactionHistory() {
  return historyPlug;
}

export function getUserData() {
  const action = 'getUserData';
  const urlAPI = `${apiUrl}/index.php?action=${action}`;
  const token = getCookie('token');

  return fetch(urlAPI, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': `Bearer ${token}`
      },
  })
  .then(response => response.json())
  .then(data => {
    const cardsData = JSON.parse(data.cards).map(cardData => ({
      number: cardData.number_card,
      date: cardData.before_date,
      balance: cardData.amount_of_money,
      unit: cardData.unit,
      cvv: cardData.cvv,
    }));


    return {
      success: data.success,
      cardsData,
      history: JSON.parse(data.allHistory),
    }
  })
  .catch(error => console.error('Помилка:', error));
}

export const getProfileUserData = async () => {
  const action = "getProfileUserData";
  const urlAPI = `${apiUrl}/index.php?action=${action}`;
  const token = getCookie('token');

  return fetch(urlAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `Bearer ${token}`
    },
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Помилка:', error);
  });

}