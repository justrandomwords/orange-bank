import './home.css'
import FeatureCard from '../../components/ui/FeatureCard/FeatureCard';
import { useSelector } from 'react-redux';
import TransactionCard from '../../components/ui/TransactionCard/TransactionsCard';
import QuickOperation from '../../components/ui/QuickOperation/QuickOperation';
import BankcardContainer from '../../components/ui/BankcardContainer/BankcardContainer';


export default function Home() {
  const transactionHistory = useSelector(store => store.transactionHistory.transactionHistory);
  
  const transactionHistoryElement = transactionHistory.map(transactionsDay => 
    <TransactionCard 
      date={transactionsDay.date} 
      transactionsDay={transactionsDay.transactions}
    />
  )

  return (
    <div className='home-page'>
      <BankcardContainer/>

      <div className='function-container'>
        <FeatureCard header='Статистика'>
        </FeatureCard> 

        <FeatureCard class='bottomless' childrenClass='transactions-cards-container' header='Історія транзакції'>
          {transactionHistoryElement}
        </FeatureCard>
      </div>
    </div>
  )
}