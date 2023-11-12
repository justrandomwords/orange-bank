import { useRef } from 'react';
import CreaditCard from '../../components/ui/CreditCard/CreditCard'
import './home.css'
import useSmoothScroll from 'react-smooth-scroll-hook';
import { ReactComponent as ArrowIcon } from '../../assets/icons/angle-down.svg'
import FeatureCard from '../../components/ui/FeatureCard/FeatureCard';
import { useSelector } from 'react-redux';
import TransactionCard from '../../components/ui/TransactionCard/TransactionsCard';
import Operation from '../../components/ui/Operation/Operation';


export default function Home() {
  const cards = useSelector(store => store.cards.cards)
  const transactionHistory = useSelector(store => store.transactionHistory.transactionHistory)
  
  // const ref = useRef(document.body);
 
  // const { scrollTo } = useSmoothScroll({
  //   ref,
  //   speed: 20,
  //   direction: 'x',
  // });

  // function mouseHorizontalScroll(e) {
  //   console.log(e.pageX - scrollContainerRef.current.offsetLeft);
  // }

  const scrollContainerRef = useRef(document.body);
  
  function horizontalScroll(e) {
    scrollContainerRef.current.scrollLeft += e.deltaY;
  }


  const creditCards = cards.map( creditCard => 
    <CreaditCard 
      id={`creadit-card${creditCard.id}`}
      number={creditCard.number}
      date={creditCard.date}
      balance={creditCard.balance}
      unit={creditCard.unit}
    />)

  const transactionHistoryElement = transactionHistory.map(transactionsDay => 
  <TransactionCard name={transactionsDay.date} transactionsDay={transactionsDay.transactions}/>)

  function test() {
    console.log('test')
  }

  return (
    <div className='home-page'>
      <div className='cards-container' ref={scrollContainerRef} onWheel={horizontalScroll}>
        <button className='toggle-button active'>
          <ArrowIcon/>
        </button>
        {creditCards}
      </div>

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