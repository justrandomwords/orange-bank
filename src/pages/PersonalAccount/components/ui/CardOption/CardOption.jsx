import './card-option.css'
import Bankcard from '../Bankcard/Bankcard'

export default function CardOption(props) {
  return (
    <div className='card-option-container' onClick={props.handleClick}>
      <div className='card-icon'>
        <Bankcard 
          number={props.cardData.number}
          date={props.cardData.date}
          balance={props.cardData.balance}
          unit={props.cardData.unit}
          fontSize={0.6}
        /> 
      </div>
    </div>
  )
}