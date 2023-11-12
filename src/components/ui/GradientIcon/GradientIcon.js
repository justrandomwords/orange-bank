import './gradient-icon.css'
import { getTwoSimilarColorsHWB } from '../../colorGenerator';

export default function GradientIcon(props) {
  const colors = getTwoSimilarColorsHWB()

  const iconStyle = {
    ['--icon-first-color']: colors[0],
    ['--icon-second-color']: colors[1] 
  }

  return (
    <div className={`icon-container ${props.class}`} style={iconStyle}>
      {props.children}
    </div>
  )
}