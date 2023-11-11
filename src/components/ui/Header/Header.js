import './header.css'
import image from '../../../temporary/1.jpg'

export default function Header() {
  return (
    <header className='header-container'>
      <div className='logo-container'>
        <img className='logo-image' src={image}/>
        <p className='logo-name'>Bank</p>
      </div>
      <div className='logo-container'>
        <img className='profile-image' src={image}/>
      </div>
    </header>
  )
}
