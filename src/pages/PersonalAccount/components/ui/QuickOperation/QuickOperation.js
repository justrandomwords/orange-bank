import GradientIcon from '../../../../../components/ui/GradientIcon/GradientIcon'
import './quick-operation.css'

export default function QuickOperation(props) {
  return (
    <div className='quick-operation-container' onClick={props.handleClick}>
      <GradientIcon class='test' textSeed={props.name}/>
      <div>{props.name}</div>
    </div>
  )
}