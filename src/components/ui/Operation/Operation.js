import GradientIcon from '../GradientIcon/GradientIcon'
import './operation.css'

export default function Operation(props) {
  return (
    <div className='operation-container' onClick={props.handleClick}>
      <GradientIcon class='test'/>
      <div>{props.name}</div>
    </div>
  )
}