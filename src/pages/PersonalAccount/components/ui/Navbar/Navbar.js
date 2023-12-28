import NavbarElement from '../NavbarElement/NavbarElement'
import './navbar.css'
import { ReactComponent as HomeIcon } from '../../../../../assets/icons/home.svg'
import { ReactComponent as PaymentIcon } from '../../../../../assets/icons/money-check.svg'
import { ReactComponent as CreditIcon } from '../../../../../assets/icons/piggy-bank.svg'
import { useDispatch, useSelector } from 'react-redux'
import navbarElements from './../../../enums/navbarElements'
import { changeHomeTab } from '../../../../../services/state/display/homeTabSlice'
import { invertNavbarVisibility } from '../../../../../services/state/display/navbarVisibilitySlice'
import { setTheme } from '../../../../../services/state/display/themeSlice'
import { themes } from '../../../../../enums/theme'

export default function Navbar() {
  const isShown = useSelector(store => store.navbarVisibility.isShown)
  const dispatch = useDispatch();
  const theme = useSelector(store => store.theme.value)

  function updatePage(pageIndex) {
    dispatch(changeHomeTab(pageIndex))
  }

  function updateTheme() {
    if (theme === themes.light) 
      dispatch(setTheme(themes.dark))
    else if (theme === themes.dark) 
      dispatch(setTheme(themes.light))

  }

  return (
    <nav className={`navbar`} hidden={!isShown}>
        <NavbarElement 
          name='Стрілка' 
          handleClick={() => dispatch(invertNavbarVisibility())}
        />

        <NavbarElement 
        name='Домашня сторінка' 
        handleClick={() => updatePage(navbarElements.Home)}>
          <HomeIcon/>
        </NavbarElement>

        <NavbarElement 
        name='Платежі' 
        handleClick={() => updatePage(navbarElements.Payment)}>
          <PaymentIcon/>
        </NavbarElement>

        <NavbarElement 
        name='Кредити' 
        handleClick={() => updatePage(navbarElements.Credit)}>
          <CreditIcon/>
        </NavbarElement>

        <NavbarElement 
          name='Тема' 
          handleClick={updateTheme}
        />
    </nav>
  )
}