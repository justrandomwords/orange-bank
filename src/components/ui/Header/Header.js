import './header.css'
import { ReactComponent as BankLogo } from '../../../assets/icons/bank-logo.svg'
import temporaryImage from '../../../temporary/1.jpg'

export default function Header() {
  return (
    <header className='header-container'>
      <div className='logo-container'>
        <div className='logo-image-container'>
          <BankLogo className='logo'/>
        </div>
        <p className='logo-name'>Bank</p>
      </div>
      <div className='profile-image-container'>
        <img className='profile-image' src={temporaryImage}/>
      </div>
    </header>
  )
}
