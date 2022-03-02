import icon from './zen-icon.png'
import './Logo.css'

function Logo() {
    return <div className="logo">
        <img className="logo__icon" src={icon} />
        <h1>hola mundo</h1>
    </div>
}

export default Logo