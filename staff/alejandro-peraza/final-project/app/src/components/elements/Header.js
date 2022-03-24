import './Header.sass'
import { IconProfile, IconHamburger, IconLogo } from '../icons'

function Header({ onLogo, onProfile, onHamburger}) {

    const goToLogo = event => {
        event.preventDefault()
        if(onLogo) onLogo()
    }
    const goToProfile = event => {
        event.preventDefault()
        if(onProfile) onProfile()
    }
    const goToHamburger = event => {
        event.preventDefault()
        if(onHamburger) onHamburger()
    }


    return <>
        <header className='header'>
            <a href='' onClick={goToLogo}> <IconLogo /> </a>
            <a href='' onClick={goToProfile}> <IconProfile /> </a>
            <a href='' onClick={goToHamburger}> <IconHamburger /> </a>

        </header>
    </>
}

export default Header