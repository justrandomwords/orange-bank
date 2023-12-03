import './payment.css'
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CardOption from '../../components/ui/CardOption/CardOption';
import CardColumn from '../../components/ui/CardColumn/CardColumn';
import Bankcard from '../../components/ui/Bankcard/Bankcard';
import RecipientInput from '../../components/ui/RecipientInput/RecipientInput';

export default function Payment() {
  const [ paymentForm, setPaymentForm ] = useState({
    cardNumber: '',
    transactionAmout: '',
    description: '',
    recipientCardNumber: '',
    recipientPhone: ''
  })

  function updateAmout(e) {

    const value = e.target.value.replace(/\D/g, '');

    if (value !== '') {
      setAmountStyle({
        width: getlength(+value)
      });
    }


    setAmountStyle({
      width: getlength(+value)
    });

    setPaymentForm(prevPaymentFomr => ({
      ...prevPaymentFomr,
      transactionAmout: value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    }))
  }

  const [ amountStyle, setAmountStyle] = useState({
    width: getlength()
  })

  function getlength(number=0) {
    const test = number.toString().length * 2.6;

    return `${test}rem`;
  }

  const cards = useSelector(store => store.cards.cards)
  const [ currentCard, setCurrentCard] = useState(cards[0])
  const cardsOptions = cards.map(card => 
    <CardOption cardData={card} 
      handleClick={() => updateCurrentCard(card.number)}
    />
  )

  function updateCurrentCard(cardNumber) {
    const newCard = cards.find(card => card.number === cardNumber)
    setCurrentCard(newCard)
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      cardNumber: newCard.number
    }))
  }

  function updateDescription(e) {
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      description: e.target.innerHTML
    }))
  }
  
  function updateRecipientCardNumber(value) {
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      recipientCardNumber: value
    }))
  }

  function updateRecipientPhone(value) {
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      recipientPhone: value
    }))
  }


  return (
    <div className='payment-container'>
      <CardColumn 
        menuHeader='Вибрати карту'
        header='Ваша карта'
        options={cardsOptions}
      >
        <Bankcard 
          number={currentCard.number}
          date={currentCard.date}
          balance={currentCard.balance}
          unit={currentCard.unit}
          fontSize={1.2}
        />
      </CardColumn>
      <div className='center'>
        <div className='balance-wrapper'>
          <input 
            className='balance' 
            value={paymentForm.transactionAmout} 
            onChange={updateAmout}
            placeholder='0'
            style={amountStyle}
          />
          <p className='unit'>₴</p> 
          <div id="width-determinator">{paymentForm.transactionAmout}</div>
        </div>
        <div className='actions'>
          <button className='transfer-button'>Переказати</button>
        </div>
        <div className='description-wrapper'>
          <div 
            placeholder='Опис' 
            className='description-textarea'
            value={paymentForm.description}
            contentEditable
            onInput={updateDescription}
          />
        </div>
      </div>
      <CardColumn 
        menuHeader='Вибрати шаблон'
        header='Отримувач'
        options={cardsOptions[0]}
      >
        <RecipientInput 
          updateCard={updateRecipientCardNumber}
          updatePhone={updateRecipientPhone}
        />
      </CardColumn>
    </div>
  )
}

//38
//26