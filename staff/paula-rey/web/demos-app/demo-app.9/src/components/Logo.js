import './Logo.css'
import icon from '../assets/bomb-logo.png'

function Logo() {
    return <div className ="logo">
        <img className= "logo__icon" src={icon}/>
    </div>
}

export default Logo