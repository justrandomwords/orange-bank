import './navbar-element.css'

export default function NavbarElement(props) {
  return (
    <div className='navbar-element' onClick={props.handleClick}>
      <div className='logo-container'>{props.children}</div>
      <p>{props.name}</p>
    </div>
  )
}