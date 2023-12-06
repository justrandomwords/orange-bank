import './card-container.css'
import SwitchMenu from '../SwitchMenu/SwitchMenu';
import { useState } from 'react';

export default function CardColumn(props) {
  const [ isMenuShow, setIsMenuShow ] = useState(false)

  function switchIsMenuShow() {
    setIsMenuShow(prevCondition => !prevCondition)
  }

  return (
    <div className='card-column-container'>
      <div className='payment-card-container'>
        <h1 className='header'>{props.header}</h1>
          {props.children}
        <SwitchMenu header={props.menuHeader} hideClick={switchIsMenuShow} ishidden={isMenuShow}>
          {props.options}
        </SwitchMenu>
      </div>
    </div>
  )
}