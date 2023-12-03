import './bank-card.css'

export default function Bankcard(props) {
  const isShown = props.isShown !== undefined ? props.isShown : true 
  const cardNumber = props.number.split(' ').map(numberPart => <p>{numberPart}</p>)

  const fontStyle = {
    fontSize: `${props.fontSize}rem`
  }

  return (
    <div className='bankcard' id={props.id} hidden={!isShown} style={fontStyle}>
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
        <div className='date'>
          <p>{props.date}</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}