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

export default function App() {
  const dispatch = useDispatch();
  dispatch(setCards(getCards()));
  dispatch(setTransactionHistory(getTransactionHistory()))

  const pageIndex = useSelector(state => state.pageIndex.value);


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
        <Header/>
        <Navbar/>
        {getPageByIndex(pageIndex)}
      </div>
  );
}