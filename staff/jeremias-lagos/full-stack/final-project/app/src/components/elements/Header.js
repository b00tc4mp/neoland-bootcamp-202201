import './Header.sass'
import { IconLogo } from '../icons'
import {FaUser} from "react-icons/fa"

function Header({ onLogo, onProfile }) {

    const goToLogo = event => {
        event.preventDefault()
        if (onLogo) onLogo()
    }

    return <>
        <header className='header'>
            <a href='' onClick={goToLogo}> <IconLogo/></a>
            <FaUser onClick={onProfile} className='header__icon-profile'/>
        </header>
    </>
}

export default Header