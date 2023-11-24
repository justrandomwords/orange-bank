import './feature-card.css'

export default function FeatureCard(props) {
  return (
    <div className={`feature-card ${props.class}`}>
      <h3 className='header'>{props.header}</h3>
      <div className={`childrens ${props.childrenClass}`}>
        {props.children}
      </div>
    </div>
  )
}