import { useEffect, useState } from 'react';
import './modern-input.css'

export default function ModernInput(props) {
  const [ isShownMessage, setIsShownMessage ] = useState(props.isShownMessage);
  const [ message, setMessage ] = useState(props.message);

  function updateInput(event) {
    const value = event.target.value

    if (props.type === 'name' && /[^а-яА-ЯіїєІЇЄ-]/.test(value) ) {
      setIsShownMessage(true);
      setMessage('Недопустимий символ');
    } else if(props.type === 'login' && /[^a-zA-Z0-9]/.test(value)) {
      setIsShownMessage(true);
      setMessage('Недопустимий символ');
    } else {
      setIsShownMessage(false);
    }

    props.handleChange(event)
  }

  useEffect(() => {
    if (props.message) {
      setIsShownMessage(true);
      setMessage(props.message);
    }
  }, [props])

  return (
    <div className='modern-input-container'>
      <input 
        className='form-input'
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={updateInput}
        pattern="[a-zA-Z0-9]{16}"
      />
      <p className='placeholder'>{props.placeholder}</p>
      <div className='underline' error={`${isShownMessage}`}>
        <div className='line'></div>
        <div className='message'>{message}</div>
      </div>
    </div>
  )
}