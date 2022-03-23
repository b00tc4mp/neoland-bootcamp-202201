import './Logo.sass';
import icon from '../../assets/racketMatch.png'


export function Logo({className = '' }) {
    return <figure className={`logo ${className}`} >
        <img  src={icon} alt="logo racketMatch"></img>
    </figure>
}

