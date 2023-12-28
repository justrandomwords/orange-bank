import { apiUrl } from "./apiUrl";
import { getCookie } from "./getCookie";

export const changePassword = async(verifypassword, newpassword) => {
  let token = getCookie('token');

  return fetch(`${apiUrl}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': `Bearer ${token}`
  },
  body: JSON.stringify({
    action: 'resetPassword',
    verifyPassword: verifypassword,
    newPasswrod: newpassword
  }),
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Помилка:', error.message);
  });
}

export const uppateData = async(profileForm) => {
  let token = getCookie('token');

  return fetch(`${apiUrl}`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `Bearer ${token}`
  },
  body: JSON.stringify({
      action: 'updateUserData',
      avatar: null,
      name: profileForm.name,
      surname: profileForm.surname,
      login: profileForm.login,
      mobilephone: '504891584',
      email: profileForm.email,
      codeCountry: '+380',
  }),
  })
  .then(response => response.json())
  .catch(error => console.error('Помилка:', error.message));
}
