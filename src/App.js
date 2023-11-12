import './App.css';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import navbarElements from './enums/navbarElements';
import Home from './pages/Home/Home';
import Payment from './pages/Payment/Payment';
import Creadit from './pages/Credit/Credit';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from './services/state/user/cards';
import { getCards, getTransactionHistory } from './services/api/userData';
import { setTransactionHistory } from './services/state/user/transactionHistory';
import { themes } from './enums/theme';



export default function App() {
  const dispatch = useDispatch();
  dispatch(setCards(getCards()));
  dispatch(setTransactionHistory(getTransactionHistory()))

  const pageIndex = useSelector(store => store.pageIndex.value);
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


  function getPageByIndex(pageIndex) {
    switch (pageIndex) {
      case navbarElements.Home:
        return <Home/>
      case navbarElements.Payment:
        return <Payment/>
      case navbarElements.Credit:
        return <Creadit/>
      case navbarElements.Setting:
        return <Home/>
    }
  }

  return (
    <div className='App'>
      <Navbar/>
      {getPageByIndex(pageIndex)}
      <Header/>
    </div>
  );
}