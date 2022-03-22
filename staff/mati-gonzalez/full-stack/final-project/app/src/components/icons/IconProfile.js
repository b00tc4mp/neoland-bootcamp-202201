import './IconProfile.sass'
import logo from '../../assets/images/info.PNG'
//import logo here 

function IconProfile() {
    return <>
        <figure className='logo'>
            <h3>Life sucks, and then you die :)</h3>
            <p>Click the icon for more info on how much life sucks</p>
            <img className='logo-img' src={logo}/>
        </figure>
    </>
}

export default IconProfile 