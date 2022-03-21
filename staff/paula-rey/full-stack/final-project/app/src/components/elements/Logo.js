import './Logo.sass'
import logo from '../../assets/logo.png'

function Logo({className=''}) {
    
    return <>
    <figure className = {`logo ${className}`}>
        <img src={logo} alt="logo"/>
    </figure>
    </>

}

export default Logo