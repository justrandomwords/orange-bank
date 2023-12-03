import '../access.css'
import { useState } from 'react'
import { updatePage } from '../../../services/state/display/pageSlice'
import { pages } from '../../../enums/pages'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../services/api/login'

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [registrationFrom, setRegistrationFrom] = useState({
    name: '',
    surname: '',
    login: '',
    password: '',
    confirmPassword: '',
  })

  function switchAccessForm() {
    dispatch(updatePage(pages.Login.id))
  }

  async function tryRegister() {
    const registerResult = await register(registrationFrom);

    if (registerResult.success) {
      const loginResult = await login(registrationFrom);

      if (loginResult.success) 
        dispatch(updatePage(pages.PersonalAccount.id));
      else 
        console.log(loginResult.message);
    }
    else {
      console.log(registerResult.message);
    }
  };

  function confirmForm() {
    if (registrationFrom.password === registrationFrom.confirmPassword) {
      tryRegister()
    }
    else
      console.log('not register'); 
  }


  function updateRegistrationFrom(event) {
    const {name, value} = event.target

    setRegistrationFrom(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return (
    <div className='access-container'>
      <div className='access-form'>
        <h1 className='header'>Реєстрація</h1>
        <div className='input-container'>
          <div placeholder="Ім'я">
            <input 
              className='form-input'
              name='name'
              value={registrationFrom.name}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Ім'я</p>
          </div>
          <div placeholder='Прізвище'>
            <input 
              className='form-input'
              name='surname'
              value={registrationFrom.surname}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Прізвище</p>
          </div>
          <div placeholder='Логін'>
            <input 
              className='form-input'
              name='login'
              value={registrationFrom.login}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Логін</p>
          </div>
          <div placeholder='Пароль'>
            <input 
              className='form-input'
              type='password'
              name='password'
              value={registrationFrom.password}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Пароль</p>
          </div>
          <div placeholder='Підтвердити пароль'>
            <input 
              className='form-input'
              type='password'
              name='confirmPassword'
              value={registrationFrom.confirmPassword}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Підтвердити пароль</p>
          </div>
        </div>
        <div className='from-bottom'>
          <button 
            className='confirm-button' type="button"
            onClick={confirmForm}
          > 
            Зареєстуватися
          </button>
          <div className='under-button'>
            Вже маєте аккаунт? 
            <span className='to-login' onClick={switchAccessForm}>
              Ввійти
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}