import '../access.css'
import { useState } from 'react'
import { updatePage } from '../../../services/state/display/pageSlice'
import { pages } from '../../../enums/pages'
import { useDispatch } from 'react-redux'
import { login } from '../services/request/access'

export default function LoginForm() {
  const dispatch = useDispatch();
  const [loginFrom, setLoginFrom] = useState({
    login: '',
    password: '',
  })

  function switchAccessForm() {
    dispatch(updatePage(pages.Register.id))
  }

  function confirmForm() {
    login();
    dispatch(updatePage(pages.PersonalAccount.id));
  }

  function updateRegistrationFrom(event) {
    const {name, value} = event.target

    setLoginFrom(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return (
    <div className='access-container'>
      <div className='access-form'>
        <h1 className='header'>Вхід</h1>
        <div className='input-container'>
          <div>
            <input 
              className='form-input'
              name='login'
              value={loginFrom.login}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Логін</p>
          </div>
          <div>
            <input 
              className='form-input'
              type='password'
              name='password'
              value={loginFrom.password}
              onChange={updateRegistrationFrom}
              pattern="[a-zA-Z0-9]{16}"
            />
            <p className='placeholder'>Пароль</p>
          </div>
        </div>
        <div className='from-bottom'>
          <button 
            className='confirm-button' type="button"
            onClick={confirmForm}
          > 
            Увійти
          </button>
          <div className='under-button'>
            Не маєте аккаунта? 
            <span className='to-login' onClick={switchAccessForm}>
              Зареєструватися
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}