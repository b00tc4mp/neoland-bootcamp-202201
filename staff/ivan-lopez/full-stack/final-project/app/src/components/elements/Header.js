import './Header.sass'
import { IconProfile, IconLogo } from '../icons'

function Header({ onLogo, onProfile }) {

    const goToLogo = event => {
        event.preventDefault()
        if(onLogo) onLogo()
    }
    const goToProfile = event => {
        event.preventDefault()
        if(onProfile) onProfile()
    }


    return <div className='header-wrapper'>
        <header className='header'>
            <a className='header__icon-logo' href='' onClick={goToLogo} > <IconLogo /> </a>
            <a className='header__icon-profile' href='' onClick={goToProfile}> <IconProfile /> </a>
        </header>
    </div>
}

export default Header