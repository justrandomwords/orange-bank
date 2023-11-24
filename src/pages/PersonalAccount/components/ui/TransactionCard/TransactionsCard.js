import './transactions-card.css'
import Transaction from "../Transaction/Transaction"

export default function TransactionsCard(props) {
  const transactions = props.transactionsDay.map(transaction => {
    return <Transaction { ...transaction }/>
  })

  return (
    <div className='transactions-container'>
      <h4 className='date'>{props.name}</h4>
      <div className='transactions'>{transactions}</div>
    </div>
  )
}