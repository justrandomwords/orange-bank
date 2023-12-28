import '../access.css'
import { useState } from 'react'
import { updatePage } from '../../../services/state/display/pageSlice'
import { pages } from '../../../enums/pages'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../services/api/authorization'
import ModernInput from '../../../components/ui/ModernInput/ModernInput'
import { setFullName } from '../../../services/state/user/mainInfo'

export default function LoginForm() {
  const dispatch = useDispatch();
  const [loginFrom, setLoginFrom] = useState({
    login: '',
    password: '',
  })
  const [messageFrom, setMessageFrom] = useState({
    login: '',
    password: '',
  })

  function updateMessage(name, message) {
    setMessageFrom(prevMessageFrom => ({
      ...prevMessageFrom,
      [name]: message,
    }))
  }

  function updatePassword(event) {
    const value = event.target.value;
    updateMessage('password', '');
    
    const filteredValue = value.replace(/[^a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?\/\\=|\-'"]/g, '');

    setLoginFrom(prevForm => ({
      ...prevForm,
      password: filteredValue
    }))
  }

  function updateLogin(event) {
    const value = event.target.value
    updateMessage('login', '')

    setLoginFrom(prevForm => ({
      ...prevForm,
      login: value
    }))
  }

  function confirmForm() {
    let canLogin = true;

    for (let key in loginFrom) {
      if(loginFrom[key] === '') {
        updateMessage(key, 'Це поле необхідно заповнити')
        canLogin = false;
      }
    }

    if (canLogin) {
      authorization()
    }
  }

  function switchAccessForm() {
    dispatch(updatePage(pages.Register.id))
  }

  async function authorization() {
    const loginResult = await login(loginFrom);

    if (loginResult.success) {
      dispatch(updatePage(pages.PersonalAccount.id));
      dispatch(setFullName([loginResult.name, loginResult.surname]));
    }
    else {
      console.log(loginResult.message);
    }
  }

  return (
    <div className='access-container'>
      <div className='access-form'>
        <h1 className='header'>Вхід</h1>
        <div className='inputs-wrapper'>
          <div className='input-container'>
          <ModernInput
            name='login'
            placeholder='Логін'
            type='login'
            value={loginFrom.login}
            handleChange={updateLogin}
            message={messageFrom.login}
          />
          <ModernInput
            name='password'
            placeholder='Пароль'
            type='password'
            value={loginFrom.password}
            handleChange={updatePassword}
            message={messageFrom.password}
          />
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