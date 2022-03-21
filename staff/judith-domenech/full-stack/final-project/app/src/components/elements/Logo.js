import './Logo.sass';
import icon from '../../assets/racketMatch.png'


function Logo({className = '' }) {
    return <figure className={`logo ${className}`} >
        <img  src={icon} alt="logo racketMatch"></img>
    </figure>
}

export default Logo