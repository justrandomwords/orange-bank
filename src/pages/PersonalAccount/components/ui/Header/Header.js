import './header.css'
import { ReactComponent as BankLogo } from '../../../../../assets/icons/bank-logo.svg'
import temporaryImage from '../../../../../temporary/1.jpg'
import { useDispatch } from 'react-redux'
import { updatePage } from '../../../../../services/state/display/pageSlice'
import { pages } from '../../../../../enums/pages'
import { useState } from 'react'


function ProfileButton() {
  const [ isOptionShown, setIsOptionShown ] = useState(false);

  function updateIsOptionShown() {
    setIsOptionShown(prevCondition => !prevCondition)
  }

  return (
    <div className='profile-button-container'>
      <button 
      className='profile-image-wrapper' 
      onClick={updateIsOptionShown} 
      onBlur={() => setIsOptionShown(false)}>
        <img className='profile-image' src={temporaryImage}/>
      </button>
      <div className='options-wrapper' shown={`${isOptionShown}`}>
        <div className='name-button'>Денис Курп'як</div>
        <button>Налаштування</button>
        <button className='quit-button'>Вийти</button>
      </div>
    </div>
  )
}


export default function Header() {
  const dispatch = useDispatch();

  function openMainPage() {
    dispatch(updatePage(pages.Main.id))
  }

  return (
    <header className='header-container'>
      <div className='logo-container' onClick={openMainPage}>
        <div className='logo-image-container'>
          <BankLogo className='logo'/>
        </div>
        <p className='logo-name'>Bank</p>
      </div>
      <ProfileButton/>
    </header>
  )
}
