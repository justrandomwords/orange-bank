import './home.css'
import FeatureCard from '../../components/ui/FeatureCard/FeatureCard';
import { useSelector } from 'react-redux';
import TransactionCard from '../../components/ui/TransactionCard/TransactionsCard';
import Operation from '../../components/ui/Operation/Operation';
import BankcardContainer from '../../components/ui/BankcardContainer/BankcardContainer';


export default function Home() {
  const transactionHistory = useSelector(store => store.transactionHistory.transactionHistory);
  
  const transactionHistoryElement = transactionHistory.map(transactionsDay => 
  <TransactionCard name={transactionsDay.date} transactionsDay={transactionsDay.transactions}/>)

  function test() {
    console.log('test')
  }

  return (
    <div className='home-page'>
      <BankcardContainer/>

      <div className='function-container'>
        <FeatureCard childrenClass='operations' header='Швидкі дії'>
          <Operation name='Платежі' handleClick={test}/>
          <Operation name='Платежі' handleClick={test}/>
          <Operation name='Платежі' handleClick={test}/>
          <Operation name='Переказ на карту / за номером телефону' handleClick={test}/>
        </FeatureCard>

        <FeatureCard class='bottomless' childrenClass='transactions-cards-container' header='Історія транзакції'>
          {transactionHistoryElement}
        </FeatureCard>

        <FeatureCard header='Статистика'>
        </FeatureCard>       
      </div>
    </div>


    // <div className='home-page'>
    //   <div ref={scrollContainerRef} className='cards-container' onWheel={() => scrollTo('#14')} >
    //     <CreaditCard/>
    //     <CreaditCard/>
    //     <CreaditCard/>
    //     <div id='14'>test</div>
    //     <CreaditCard/>
    //     <CreaditCard/>
    //   </div>
    //   <div></div>
    // </div>
  )
}