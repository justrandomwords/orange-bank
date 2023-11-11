import NavbarElement from '../NavbarElement/NavbarElement'
import './navbar.css'
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg'
import { ReactComponent as PaymentIcon } from '../../../assets/icons/money-check.svg'
import { ReactComponent as CreditIcon } from '../../../assets/icons/piggy-bank.svg'
import { useDispatch } from 'react-redux'
import navbarElements from '../../../enums/navbarElements'
import { change } from '../../../services/state/pageIndex/pageIndexSlice'

export default function Navbar() {
  const dispatch = useDispatch();

  function updatePage(pageIndex) {
    dispatch(change(pageIndex))
  }

  return (
    <nav className='navbar'>
        <NavbarElement name='Домашня сторінка' handleClick={() => updatePage(navbarElements.Home)}>
          <HomeIcon/>
        </NavbarElement>
        <NavbarElement name='Платежі' handleClick={() => updatePage(navbarElements.Payment)}>
          <PaymentIcon/>
        </NavbarElement>
        <NavbarElement name='Кредити' handleClick={() => updatePage(navbarElements.Credit)}>
          <CreditIcon/>
        </NavbarElement>
    </nav>
  )
}