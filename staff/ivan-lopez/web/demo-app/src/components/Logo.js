import icon from '../assets/demo-logo.png'
import './Logo.css'

function Logo() {
    return <div className="logo">
        <img className="logo__icon" src={icon} alt="demo"></img>
    </div>
}

export default Logo