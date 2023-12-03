import './main.css'
import { useDispatch } from 'react-redux'
import { pages } from '../../enums/pages'
import { updatePage } from '../../services/state/display/pageSlice'
import { checkToken } from '../../services/api/checkToken'


function LoginButtons() {
  const dispatch = useDispatch()

  async function openPage(isLoginform) {
    const isLogin = await checkToken()

    if (isLogin) {
      dispatch(updatePage(pages.PersonalAccount.id))
      return;
    }

    if (isLoginform)
      dispatch(updatePage(pages.Login.id))
    else
      dispatch(updatePage(pages.Register.id)) 
  }

  return (
    <div className='buttons-container'>
      <button className='button login' onClick={() => openPage(true)}>Увійти</button>
      <button className='button sinup' onClick={() => openPage(false)}>Зареєструатися</button>
    </div>
  )
}

export default function Main() {
  return (
    <div className='main-page-container'>
      <h1 className='header'>
        <span className='accent'>Orange</span>
        Bank
      </h1>
      <p className='description'>
        Приєднуйтеся до нас сьогодні та отримайте доступ до простої, ефективної та інтуїтивно зрозумілої системи управління фінансами з OrangeBank.
      </p>
      <LoginButtons/>
    </div>
  )
}