import '../access.css'
import { useState } from 'react'
import { updatePage } from '../../../services/state/display/pageSlice'
import { pages } from '../../../enums/pages'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../services/api/authorization'
import ModernInput from '../components/ui/ModernInput/ModernInput'

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [registrationFrom, setRegistrationFrom] = useState({
    name: '',
    surname: '',
    login: '',
    password: '',
    confirmPassword: '',
  })
  const [messageFrom, setMessageFrom] = useState({
    name: '',
    surname: '',
    login: '',
    password: '',
    confirmPassword: '',
  })

  function updateMessage(name, message) {
    setMessageFrom(prevMessageFrom => ({
      ...prevMessageFrom,
      [name]: message,
    }))
  }

  function updateRegistrationFrom(event) {
    const {name, value} = event.target

    updateMessage(name, '')

    setRegistrationFrom(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  function confirmForm() {
    let canRegister = true;

    if (registrationFrom.confirmPassword !== registrationFrom.password){
      updateMessage('confirmPassword', 'Паролі не співпадають')
      canRegister = false;
    } 

    for (let key in registrationFrom) {
      if(registrationFrom[key] === '') {
        updateMessage(key, 'Це поле необхідно заповнити')
        canRegister = false;
      }
    }

    if(canRegister) {
      registration()
    }
  }

  function switchAccessForm() {
    dispatch(updatePage(pages.Login.id))
  }

  async function registration() {
    const registerResult = await register(registrationFrom);

    if (registerResult.success) {
      dispatch(updatePage(pages.PersonalAccount.id));
    }
    else {
      console.log(registerResult.message);
    }
  };

  return (
    <div className='access-container'>
      <div className='access-form'>
        <h1 className='header'>Реєстрація</h1>
        <div className='input-container'>
          <ModernInput
            name='name'
            placeholder="Ім'я"
            type='name'
            value={registrationFrom.name}
            handleChange={updateRegistrationFrom}
            message={messageFrom.name}
          />
          <ModernInput
            name='surname'
            placeholder='Прізвище'
            type='name'
            value={registrationFrom.surname}
            handleChange={updateRegistrationFrom}
            message={messageFrom.surname}
          />
          <ModernInput
            name='login'
            placeholder='Логін'
            type='login'
            value={registrationFrom.login}
            handleChange={updateRegistrationFrom}
            message={messageFrom.login}
          />
          <ModernInput
            name='password'
            placeholder='Пароль'
            type='password'
            value={registrationFrom.password}
            handleChange={updateRegistrationFrom}
            message={messageFrom.password}
          />
          <ModernInput
            name='confirmPassword'
            placeholder='Підтвердити пароль'
            type='password'
            value={registrationFrom.confirmPassword}
            handleChange={updateRegistrationFrom}
            message={messageFrom.confirmPassword}
          />
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