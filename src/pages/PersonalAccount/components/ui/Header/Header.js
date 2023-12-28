import './header.css'
import { ReactComponent as BankLogo } from '../../../../../assets/icons/bank-logo.svg'
import temporaryImage from '../../../../../temporary/1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { updatePage } from '../../../../../services/state/display/pageSlice'
import { pages } from '../../../../../enums/pages'
import { useEffect, useRef, useState } from 'react'
import navbarElements from '../../../enums/navbarElements'
import { changeHomeTab } from '../../../../../services/state/display/homeTabSlice'
import GradientIcon from '../../../../../components/ui/GradientIcon/GradientIcon'


function ProfileButton() {
  const [ isOptionShown, setIsOptionShown ] = useState(false);
  const fullName = useSelector(store => store.mainInfo.fullName);
  const profileButtonRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    profileButtonRef.current.style.setProperty(
      '--options-wrapper-width', `${-profileButtonRef.current.clientWidth * 1.2}px`
    );
  }, [fullName])

  function updateIsOptionShown() {
    setIsOptionShown(prevCondition => !prevCondition)
  }

  function openSettings() {
    dispatch(changeHomeTab(navbarElements.Settings))
  }

  return (
    <div className='profile-button-container'> 
      <button 
      className='profile-image-wrapper' 
      onClick={updateIsOptionShown} 
      onBlur={() => setIsOptionShown(false)}>
        <GradientIcon textSeed={`${fullName[0]} ${fullName[1]}`}/>
        {/* <img className='profile-image' src={temporaryImage}/> */}
      </button>
      <div className='options-wrapper' shown={`${isOptionShown}`} ref={profileButtonRef} >
        <div className='name-button'>{fullName[0]} {fullName[1]}</div>
        <button onClick={openSettings}>Налаштування</button>
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