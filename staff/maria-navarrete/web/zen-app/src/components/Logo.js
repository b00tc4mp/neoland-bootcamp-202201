import icon from './zen-logo.png'
import './Logo.css'

function Logo(){
    return <div className="logo">
        <img src={icon} className="logo__icon"></img>
        <h1>Hola Mundo</h1>
    </div>
}

export default Logo