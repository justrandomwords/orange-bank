import './personal-account.css';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import navbarElements from './enums/navbarElements';
import Home from './tabs/Home/Home';
import Payment from './tabs/Payment/Payment';
import Creadit from './tabs/Credit/Credit';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../services/state/user/cards';
import { getCards, getTransactionHistory, getUserData } from '../../services/api/userData';
import { setTransactionHistory } from '../../services/state/user/transactionHistory';
import { useEffect } from 'react';
import Settings from './tabs/Settings/Settings';

export default function PersonalAccount() {
  const dispatch = useDispatch();
  const homeTabIndex = useSelector(store => store.homeTab.index);

  function Tab() {
    switch (homeTabIndex) {
      case navbarElements.Home:
        return <Home/>
      case navbarElements.Payment:
        return <Payment/>
      case navbarElements.Credit:
        return <Creadit/>
      case navbarElements.Settings:
        return <Settings/>
    }
  }

  async function updateUserData() {
    const userData = await getUserData()
    console.log(userData.history);

    if (userData.success) {
      dispatch(setCards(userData.cardsData));
      dispatch(setTransactionHistory(userData.history));
    } 
  }

  useEffect(() => {
    updateUserData()
  }, [])

  return (
    <div className='personal-account-container'>
      <Header/>
      <Navbar/>
      <Tab/>
    </div>
  );
}