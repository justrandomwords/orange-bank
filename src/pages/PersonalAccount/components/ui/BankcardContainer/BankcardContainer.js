import './bankcard-container.css'
import { useRef, useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/angle-down.svg'
import plusIcon from '../../../../../assets/icons/plus.png'
import Bankcard from '../Bankcard/Bankcard';
import { useSelector } from 'react-redux';

export default function BankcardContainer() {
  const cards = useSelector(store => store.cards.cards);
  const [isShown, setIsShown] = useState(true);

  const creditCards = cards.map( creditCard => 
    <Bankcard 
      number={creditCard.number}
      date={creditCard.date}
      balance={creditCard.balance}
      unit={creditCard.unit}
      isShown={isShown}
  />)

  function updateIsShown() {
    setIsShown(prevCondition => !prevCondition)
  }  


  const [ focusedCard, setFocusedCard] = useState(0);
  const scrollWidth = Math.round((85.61/5*16) + 2*16);
  const scrollStyle = {
    transform: `translateX(${scrollWidth * focusedCard}px)`
  };

  function horizontalScroll(e) {
    if (e.deltaY < 0) {
      if (focusedCard == 0)
        return

      setFocusedCard(prevCount => prevCount+1)
    }
    else if (e.deltaY > 0) {
      if (Math.abs(focusedCard) > cards.length - 2)
        return

      setFocusedCard(prevCount => prevCount-1)
    }
  }

  const dragContainerRef = useRef(null);
  let startDragX = 0;
  let cardsTranslate = 0;
  let focusedCardByDrag = focusedCard;

  function drag(e) {
    e.preventDefault();


    const mouseMoveX = e.pageX - startDragX;
    const cardsTranslateX = mouseMoveX + cardsTranslate;

    if(cardsTranslateX > 0)
      return;

    focusedCardByDrag = -Math.floor(-((cardsTranslateX - scrollWidth*0.5) / scrollWidth));
  
    dragContainerRef.current.style.transform = `translateX(${cardsTranslateX}px)`;
  }

  function startDragging(e) {
    const cardsTransformCss = dragContainerRef.current.style.transform;
    cardsTranslate = +cardsTransformCss.match(/translateX\((-?\d+)px\)/)[1];

    startDragX = e.pageX;

    dragContainerRef.current.classList.add('grabbing');
    dragContainerRef.current.addEventListener('mousemove', drag);
  }

  function stopDragging() {
    dragContainerRef.current.classList.remove('grabbing');
    dragContainerRef.current.removeEventListener('mousemove', drag);
    setFocusedCard(focusedCardByDrag);
  }


  return (
    <div className='cards-container' isShown={`${isShown}`}>
      <button className='toggle-button active' 
      onClick={updateIsShown}>
        <ArrowIcon/>
      </button>
      <div className='cards-scroll-wraper'>
        <div className='cards' 
        style={scrollStyle}
        onWheel={horizontalScroll}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        ref={dragContainerRef}>
          {creditCards}
          <button className='toggle-button active' 
          onClick={updateIsShown}>
            <img src={plusIcon}/>
          </button>
          <div className='empty-space'/>
        </div>
      </div>
    </div>
  )
}