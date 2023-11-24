import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalAccount from './pages/PersonalAccount/PersonalAccount';
import Main from './pages/Main/Main';
import { pages } from './enums/pages';
import { themes } from './enums/theme';
import LoginForm from './pages/Access/LoginForm/LoginForm';
import RegisterForm from './pages/Access/RegisterForm/RegisterForm';

export default function App() {
  const theme = useSelector(store => store.theme.value)

  switch (theme) {
    case themes.light:
      document.documentElement.setAttribute("theme", themes.light);
      break;
    case themes.dark:
      document.documentElement.setAttribute("theme", themes.dark);
      break;
    default:
      break;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`/${pages.Main.address}`} element={<Main/>} />
          <Route path={`/${pages.Login.address}`} element={<LoginForm/>} />
          <Route path={`/${pages.Register.address}`} element={<RegisterForm/>} />
          <Route path={`/${pages.PersonalAccount.address}`} element={<PersonalAccount/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}