import { apiUrl } from "./apiUrl";

export function register(formData) {
  return fetch(`${apiUrl}/auth.php`, {
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
  .then(data =>{
    if(data.success) {
      document.cookie = `token=${data.token}; expires=${new Date(Date.now() + 60*60*1000).toUTCString()}; path=/`;
      localStorage.setItem('name', data.name);
      localStorage.setItem('surname', data.surname);
    }

    return data;
  })
  .catch(error => console.error('Помилка:', error.message));
}

export function login(formData) {
  return fetch(`${apiUrl}/auth.php`, {
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
  .then(data =>{
    if(data.success) {
      document.cookie = `token=${data.token}; expires=${new Date(Date.now() + 60*60*1000).toUTCString()}; path=/`;
      localStorage.setItem('name', data.name);
      localStorage.setItem('surname', data.surname);
    }

    return data;
  })
  .catch(error => console.error('Помилка:', error.message));
}