import { getTwoSimilarColorsHWB } from '../../colorGenerator';
import './transaction.css'

export default function Transaction(props) {
  const colors = getTwoSimilarColorsHWB()

  const iconStyle = {
    ['--icon-first-color']: colors[0],
    ['--icon-second-color']: colors[1] 
  }

  console.log(props.payment);

  return (
    <div className='transaction-container'>
      <div className='icon-container' style={iconStyle}></div>
      <div className='main-info'>
        <p className='name'>{props.name}</p>
        <p className='description'>{props.description}</p>
      </div>
      <div className={`amount-container ${props.payment.amount >= 0 && 'positive'}`}>
        <p className='amout'>{props.payment.amount}</p>
        <p className='units'>{props.payment.units}</p>
      </div>
    </div>
  )
}