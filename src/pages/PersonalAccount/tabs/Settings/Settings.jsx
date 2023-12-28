import { useSelector } from 'react-redux';
import './settings.css'
import GradientIcon from '../../../../components/ui/GradientIcon/GradientIcon';
import ModernInput from '../../../../components/ui/ModernInput/ModernInput';
import { useEffect, useState } from 'react';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg'
import { ReactComponent as CrossIcon } from '../../../../assets/icons/cross.svg'
import { getProfileUserData } from '../../../../services/api/userData';
import { changePassword, uppateData } from '../../../../services/api/changeData';

function ButtonChanger(props) {
  return (
    <button className='submit-button' state={`${props.state}`} onClick={props.handleClick}>
      {
        props.state === undefined ? props.name : 
        props.state ? props.successMessage : props.errorMessage
      }
    </button>
  )
         
}

function EditableInput(props) {
  const [ isEditable, setIsEditable ] = useState(false)

  function updateEditable() {
    if (isEditable) {
      props.handleChange(props.name, props.default)
    }

    setIsEditable(prevCondition => !prevCondition)
  }

  const endIcon = isEditable ? 
    <CrossIcon
      className='icon-wrapper' 
      onClick={() => updateEditable(props.name)}
    />
    :
    <EditIcon
      className='icon-wrapper' 
      onClick={() => updateEditable(props.name)}
    />

  return (
    <ModernInput
      colorStyle='theme-color'
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      editable={isEditable}
      value={props.value}
      handleChange={(event) => props.handleChange(event.target.name, event.target.value)}
      message={props.message}
    >
      {endIcon}
    </ModernInput>
  )
}

export default function Settings() {
  const fullName = useSelector(store => store.mainInfo.fullName);

  let defaultProfileFrom;
  const [profileFrom, setProfileFrom] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    login: '',
    oldPassword: '',
    newPassword: '',
  })
  const [messageFrom, setMessageFrom] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    login: '',
    oldPassword: '',
    newPassword: '',
  })

  const [ infoButtonState, setInfoButtonState ] = useState(undefined)
  const [ passwordButtonState, setPasswordButtonState ] = useState(undefined)

  function updateEditableInput(name, value) {
    updateMessage(`${name}`, '')

    setProfileFrom(prevProfileFrom => ({
      ...prevProfileFrom,
      [name]: value
    }))
  }

  function updateInput(event) {
    const {name, value} = event.target

    updateMessage(`${name}`, '')

    setProfileFrom(prevProfileFrom => ({
      ...prevProfileFrom,
      [name]: value
    }))
  }

  function updateMessage(name, message) {
    setMessageFrom(prevMessageFrom => ({
      ...prevMessageFrom,
      [name]: message,
    }))
  }

  async function getProfileData() {
    const profileUserData = await getProfileUserData();

    if (profileUserData.success) {
      defaultProfileFrom = {
        name: profileUserData.name,
        surname: profileUserData.surname,
        email: profileUserData.email,
        phone: profileUserData.mobilephone,
        login: profileUserData.login,
        oldPassword: '',
        newPassword: '',
      };
      

      setProfileFrom({ ...defaultProfileFrom })
    } else {
      console.log(profileUserData.message);
    }
  }

  async function runChangeInfo() {
    const requestResult = await uppateData(profileFrom);

    console.log(requestResult);

    setInfoButtonState(requestResult.success)
    setTimeout(() => {
      setInfoButtonState(undefined)
    }, 2000)

    if (requestResult.success)
      getProfileData()
  }

  async function runChangePassword() {
    const requestResult = await changePassword(profileFrom.oldPassword, profileFrom.newPassword);

    setPasswordButtonState(requestResult.success)
    setTimeout(() => {
      setPasswordButtonState(undefined)
    }, 2000)

    if (requestResult.success) {
      setProfileFrom(prevProfileFrom => ({
        ...prevProfileFrom,
        oldPassword: '',
        newPassword: '',
      }))
    }
  }


  useEffect(() => {
    getProfileData();
  }, [])

  return (
    <div className='settings-container'>
      <div className='settings-form'>
        <div className='profile-icon-wrapper'>
          <GradientIcon textSeed={`${fullName[0]} ${fullName[1]}`}/>
        </div>
        <div className='input-field'>
          <div className='row'>
            <EditableInput
              name='name'
              type='name'
              placeholder="Ім'я"
              default={fullName[0]}
              value={profileFrom.name}
              handleChange={updateEditableInput}
              message={messageFrom.name}
            />

            <EditableInput
              name='surname'
              type='name'
              placeholder="Прізвище"
              default={fullName[1]}
              value={profileFrom.surname}
              handleChange={updateEditableInput}
              message={messageFrom.surname}
            />
          </div>

          <div className='row'>
            <EditableInput
              name='email'
              type='email'
              placeholder="Пошта"
              default={'test@gmail.com'}
              value={profileFrom.email}
              handleChange={updateEditableInput}
              message={messageFrom.email}
            />

            <EditableInput
              name='phone'
              type='phone'
              placeholder="Телефон"
              default={'+38 095 587 41 95'}
              value={profileFrom.phone}
              handleChange={updateEditableInput}
              message={messageFrom.phone}
            />
          </div>

          <div className='row'>
            <EditableInput
              name='login'
              type='login'
              placeholder="Логін"
              default={'bamboni'}
              value={profileFrom.login}
              handleChange={updateEditableInput}
              message={messageFrom.login}
            />
          </div>
        </div>

        <ButtonChanger
          name='Змінити'
          successMessage='Дані успішно змінені'
          errorMessage='Дані не змінені'
          state={infoButtonState}
          handleClick={runChangeInfo}
        />

        <div className='input-field'>
          <div className='row'>
            <ModernInput
              colorStyle='theme-color'
              name='oldPassword'
              placeholder='Старий пароль'
              type='password'
              value={profileFrom.oldPassword}
              handleChange={updateInput}
              message={messageFrom.oldPassword}
            />

            <ModernInput
              colorStyle='theme-color'
              name='newPassword'
              placeholder='Новий пароль'
              type='password'
              value={profileFrom.newPassword}
              handleChange={updateInput}
              message={messageFrom.newPassword}
            />
          </div>
        </div>

        <ButtonChanger
          name='Змінити пароль'
          successMessage='Пароль успішно змінений'
          errorMessage='Пароль не змінено'
          state={passwordButtonState}
          handleClick={runChangePassword}
        />
      </div>
    </div>
  )  
}