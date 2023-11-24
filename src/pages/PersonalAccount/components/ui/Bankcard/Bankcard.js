import './bank-card.css'

export default function Bankcard(props) {
  const cardNumber = props.number.split(' ').map(numberPart => <p>{numberPart}</p>)

  return (
    <div className='bankcard' id={props.id}>
      <div className='balance-container'>
        <p>
          {props.balance}
          <span className='units'>{props.unit}</span>
        </p>
      </div>
      <div className='info-container'>
        <div className='card-number'>
          {cardNumber}
        </div>
        <div>
          <p>{props.date}</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}