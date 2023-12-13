import './bankcard.css'

export default function Bankcard(props) {
  const isShown = props.isShown !== undefined ? props.isShown : true 
  const cardNumberParts = props.number.match(/\d{4}/g)
  let cardNumber = cardNumberParts.map(numberPart => <p>{numberPart}</p>);

  if (!isShown) {
    const hiddenNumberElement = <p className='hidden-number'>••••</p>;
    cardNumber[0] = hiddenNumberElement;
    cardNumber[1] = hiddenNumberElement;
    cardNumber[2] = hiddenNumberElement;
  }
  

  return (
    <div className={`bankcard ${props.class}`} id={props.id} hidden={!isShown}>
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