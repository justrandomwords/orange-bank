import { apiUrl } from "./apiUrl";

export function register(formData) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    action: 1,
    name: formData.name,
    surname: formData.surname,
    login: formData.login,
    password: formData.password,
    }),
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Помилка:', error.message);
  });
};
export function login(formData) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        action: 2,
        login: formData.login,
        password: formData.password,
    }),
  })
    .then(response => response.json())
    .then(data => {
      const endTokenTime = new Date();
      endTokenTime.setTime(endTokenTime.getTime() + (60*60*1000));
      document.cookie = `token=${data.token};expires=${endTokenTime.toUTCString()};path=/`;

      return data
    })
    .catch(error => {
      console.error('Помилка:', error.message);
    });
};