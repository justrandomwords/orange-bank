import { useEffect, useState } from 'react';
import './modern-input.css'

export default function ModernInput(props) {
  const [ isShownMessage, setIsShownMessage ] = useState(props.isShownMessage);
  const [ message, setMessage ] = useState(props.message);
  const isEditable = props.editable === undefined ? true : props.editable;

  function updateInput(event) {
    if (!isEditable)
      return
    
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
    <div className={`modern-input-container ${props.colorStyle}`}>
      <div className='input-wrapper' editable={`${isEditable}`}>
        <input 
          className='form-input'
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={updateInput}
          pattern="[a-zA-Z0-9]{16}"
        />
        {props.children}
      </div>
      <p className='placeholder' ishidden>{props.placeholder}</p>
      <div className='underline'  error={`${isShownMessage}`}>
        <div className='line'></div>
        <div className='message'>{message}</div>
      </div>
    </div>
  )
}