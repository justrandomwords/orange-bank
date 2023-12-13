import './payment.css'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardOption from '../../components/ui/CardOption/CardOption';
import CardColumn from '../../components/ui/CardColumn/CardColumn';
import Bankcard from '../../components/ui/Bankcard/Bankcard';
import RecipientInput from '../../components/ui/RecipientInput/RecipientInput';
import { createPay } from '../../../../services/api/payment';
import { getUserData } from '../../../../services/api/userData';
import { setCards } from '../../../../services/state/user/cards';

export default function Payment() {
  const dispatch = useDispatch();
  const cards = useSelector(store => store.cards.cards);

  const [ transactionAmoutFormatted, setTransactionAmoutFormatted ] = useState('');

  const [ paymentForm, setPaymentForm ] = useState({
    card: cards[0],
    transactionAmout: +transactionAmoutFormatted,
    description: '',
    recipientCardNumber: '',
    recipientPhone: ''
  })

  async function sendPay() {
    const responde = await createPay(paymentForm);

    if (responde.success) {
      console.log('ypa');
    }

    const userData = await getUserData()

    if (userData.success) {
      dispatch(setCards(userData.cardsData));
    } 
  }

  function updateCurrentCard(cardNumber) {
    const newCard = cards.find(card => card.number === cardNumber)
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      card: newCard
    }))
  }

  useEffect(() => {
    updateCurrentCard(paymentForm.card.number)
  }, [cards])

  const cardsOptions = cards.map(card => 
    <CardOption cardData={card} 
      handleClick={() => updateCurrentCard(card.number)}
    />
  )

  function updateAmout(e) {
    const amount = e.target.value.replace(/\D/g, '');

    setAmountStyle({
      width: getlength(+amount)
    });

    console.log(paymentForm.transactionAmout);
    console.log(amount);

    setTransactionAmoutFormatted(amount.replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
    setPaymentForm(prevPaymentFomr => ({
      ...prevPaymentFomr,
      transactionAmout: +amount
    }))
  }

  const [ amountStyle, setAmountStyle] = useState({
    width: getlength()
  })

  function getlength(number=0) {
    const test = number.toString().length * 2.6;

    return `${test}rem`;
  }

  function getDescriptionStyle(scrollHeight=20) {
    const height = Math.round(scrollHeight / 20);
    
    return `${height*1.2}rem`
  }

  const descriptionRef = useRef(null);

  function updateDescription(e) {
    const descriptionStyle = descriptionRef.current.style;
	
    descriptionStyle.height = getDescriptionStyle()
    descriptionStyle.height = getDescriptionStyle(e.target.scrollHeight)
    
    setPaymentForm(prevPaymentForm => ({
      ...prevPaymentForm,
      description: e.target.value
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
          class='bigger-bankcard'
          number={paymentForm.card.number}
          date={paymentForm.card.date}
          balance={paymentForm.card.balance}
          unit={paymentForm.card.unit}
          scale={1.2}
        />
      </CardColumn>
      <div className='center'>
        <div className='balance-wrapper'>
          <input 
            className='balance' 
            value={transactionAmoutFormatted} 
            onChange={updateAmout}
            placeholder='0'
            style={amountStyle}
          />
          <p className='unit'>₴</p> 
          <div id="width-determinator">{paymentForm.transactionAmout}</div>
        </div>
        <div className='actions'>
          <button className='transfer-button' onClick={sendPay}>Переказати</button>
        </div>
        <div className='description-wrapper'>
          <textarea 
            placeholder='Опис' 
            className='description-textarea'
            value={paymentForm.description}
            onChange={updateDescription}
            ref={descriptionRef}
            maxlength="256"
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