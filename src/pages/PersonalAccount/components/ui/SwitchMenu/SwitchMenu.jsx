import './switch-menu.css'
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/angle-down.svg'

export default function SwitchMenu(props) {
  const childredsHeight = (props.children.length * 7);
  const currentHeight = `${ childredsHeight > 22 ? '46vh' : `${childredsHeight}rem`}`;
  const childrenStyle = {
    maxHeight: `${props.ishidden ? currentHeight : '0rem'}`
  }

  return (
    <div className='switch-menu-container' ishidden={`${!props.ishidden}`}>
      <header className='header' onClick={props.hideClick}>
        <h1 className='header-name'>{props.header}</h1>
        <ArrowIcon className='hide-menu-button'/>
      </header>
      <div className='childrens' style={childrenStyle}>
        {props.children}
      </div>
    </div>
  )
}