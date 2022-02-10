import icon from './yin-yan.png'
import './Logo.css'

function Logo() {
    return <div className ="logo">
        {/* <img className= "logo__icon" src={icon}/> */}
        <img className="logo__icon" src={icon} />
        <h1>Namaste</h1>
    </div>
}

export default Logo