import './IconLogo.sass'
import logo from '../../assets/images/lol.PNG'
// import {AiOutlineUser as logo} from react-icons/Ai
//import logo here 

function IconLogo() {
    return <>
        <figure className='logo'>
            <img className='logo-img' src={logo}/>
        </figure>
         {/* <AiOutlineUser/> */}
    </>
}

export default IconLogo 