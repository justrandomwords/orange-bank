import './transactions-card.css'
import Transaction from "../Transaction/Transaction"

export default function TransactionsCard(props) {


  const dateObject = new Date(props.date);

  const options = { month: 'long', day: 'numeric' };
  const ukrainianDate = new Intl.DateTimeFormat('uk-UA', options).format(dateObject);

  const transactions = props.transactionsDay.map(transaction => {
    return <Transaction { ...transaction }/>
  })

  return (
    <div className='transactions-container'>
      <h4 className='date'>{ukrainianDate}</h4>
      <div className='transactions'>{transactions}</div>
    </div>
  )
}