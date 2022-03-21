import './LogoIcon.sass'
import logo from '../../assets/images/graffiti-maps-logo.png'


function LogoIcon () {

    return <>
        <figure className='logo'>
            <img className='logo-img' src={logo}/>
        </figure>
    </>

}


export default LogoIcon