import './recipient-input.css'
import { useState } from 'react';

export default function RecipientInput({updateCard, updatePhone}) {
  const inputTypes = {
    unselected: 'unselected',
    byCard: 'cardInput',
    byPhone: 'phoneInput'
  }
  const [ selectedInput, setSelectedInput ] = useState(inputTypes.unselected);

  const [ cardInput, setCardInput ] = useState('')
  const [ phoneInput, setPhoneInput ] = useState('')

  function updateCardInput(e) {
    const value = e.target.value;

    const digitedValue = value.replace(/\D/g, '')
    if (digitedValue === '') {
      setCardInput('');
      return;
    }

    const cuttedValue = digitedValue.slice(0, 16);
    updateCard(cuttedValue)

    const fliteredValue = cuttedValue
      .match(/\d{1,4}/g)
      .join('   ')

    setCardInput(fliteredValue);
  }

  function updatePhoneInput(e) {

    const value = e.target.value;

    const digitedValue = value.replace(/[^+\d]/g, '')
    if (digitedValue === '') {
      setPhoneInput('');
      return;
    }

    const cuttedValue = digitedValue.slice(0, 13);
    updatePhone(cuttedValue)

    const filteredArray = cuttedValue
      .match(/^(\+\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    if (!filteredArray) {
      setPhoneInput('');
      return;
    }

    const filteredValue = filteredArray
      .slice(1,6)
      .filter(numbers => numbers !== '')
      .join(' ');

    setPhoneInput(filteredValue);
  }

  return (
    <div className='recipient-input-wrapper'>
      <h2 className='recipient-header'>Прізвище Ім'я</h2>
      <div className='input-field' selectMode={selectedInput}>
        <div className='input-option card' 
        onClick={() => setSelectedInput(inputTypes.byCard)}>
          <h4 className='category-name'>
            Номер карти
          </h4>
          <input 
            className='input' 
            placeholder='XXXX  XXXX  XXXX  XXXX'
            value={cardInput}
            onChange={updateCardInput}
          />
        </div>
        <div className='input-option phone' 
        onClick={() => setSelectedInput(inputTypes.byPhone)}>
          <h4 className='category-name'>
            Номер телефону
          </h4>
          <input 
            className='input' 
            placeholder='+38 0XX XXXX XX XX'
            value={phoneInput}
            onChange={updatePhoneInput}
          />
        </div>
      </div>
    </div>
  )
}