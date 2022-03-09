import './Logo.css';
import icon from '../assets/demo-logo.png'


function Logo() {
    return<div className= "logo">
<img className ="logo__icon" src={icon} alt="Homer"></img>

    </div>
}

export default Logo;