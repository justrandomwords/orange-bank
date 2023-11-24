import './header.css'
import { ReactComponent as BankLogo } from '../../../../../assets/icons/bank-logo.svg'
import temporaryImage from '../../../../../temporary/1.jpg'
import { useDispatch } from 'react-redux'
import { updatePage } from '../../../../../services/state/display/pageSlice'
import { pages } from '../../../../../enums/pages'


function ProfileImage() {
  return (
    <div className='profile-image-container'>
      <img className='profile-image' src={temporaryImage}/>
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
      <ProfileImage/>
    </header>
  )
}
