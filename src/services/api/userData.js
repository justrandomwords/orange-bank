import { historyPlug } from '../plugs/history';
import { apiUrl } from './apiUrl';

function getCookie(name){
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
}

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
      }
  })
  .catch(error => console.error('Помилка:', error));
}