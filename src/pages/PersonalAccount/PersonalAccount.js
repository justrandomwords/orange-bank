import './personal-account.css';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import navbarElements from '../../enums/navbarElements';
import Home from './tabs/Home/Home';
import Payment from './tabs/Payment/Payment';
import Creadit from './tabs/Credit/Credit';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../services/state/user/cards';
import { getCards, getTransactionHistory } from '../../services/api/userData';
import { setTransactionHistory } from '../../services/state/user/transactionHistory';

export default function PersonalAccount() {
  const dispatch = useDispatch();
  dispatch(setCards(getCards()));
  dispatch(setTransactionHistory(getTransactionHistory()))

  const homeTabIndex = useSelector(store => store.homeTab.index);

  function Tab() {
    switch (homeTabIndex) {
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
    <div className='personal-account-container'>
      <Header/>
      <Navbar/>
      <Tab/>
    </div>
  );
}