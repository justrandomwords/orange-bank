export const register = async (formData) => {
  fetch('http://backbank.ua/', {
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
  .then(response => {
    return response.json();
  })
  .then(data =>{
    console.log(data.message);
  })
  .catch(error => {
    console.error('Помилка:', error.message);
  });
};

export const login = async (formData) => {
  fetch('http://backbank.ua/', {
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
  .then(response => {
    return response.json();
  })
  .then(data =>{
    console.log(data.message);
  })
  .catch(error => {
    console.error('Помилка:', error.message);
  });
};