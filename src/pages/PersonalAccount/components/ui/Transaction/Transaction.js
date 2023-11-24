import GradientIcon from '../../../../../components/ui/GradientIcon/GradientIcon'
import './transaction.css'

export default function Transaction(props) {

  return (
    <div className='transaction-container'>
      <GradientIcon/>
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