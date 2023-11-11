import './credit-card.css'

export default function CreaditCard(props) {
  const cardNumber = props.number.split(' ').map(numberPart => <p>{numberPart}</p>)

  return (
    <div className='credit-card' id={props.id}>
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