import './bankcard-container.css'
import { useRef, useState } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/angle-down.svg'
import Bankcard from '../Bankcard/Bankcard';
import { useSelector } from 'react-redux';

export default function BankcardContainer() {
  const cards = useSelector(store => store.cards.cards);
  const [isShown, setIsShown] = useState(true);

  const creditCards = cards.map( creditCard => 
    <Bankcard 
      id={`creadit-card${creditCard.id}`}
      number={creditCard.number}
      date={creditCard.date}
      balance={creditCard.balance}
      unit={creditCard.unit}
  />)


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
    scrollContainerRef.current.scrollLeft += e.deltaY/5;
  }


  function updateVisibilityCards() {
    setIsShown(prevCondition => !prevCondition);
  }


  return (
    <div className='cards-container' hidden={!isShown} 
    ref={scrollContainerRef} 
    onWheel={horizontalScroll}>
      <button className='toggle-button active' onClick={updateVisibilityCards}>
        <ArrowIcon/>
      </button>
      {creditCards}
    </div>
  )
}