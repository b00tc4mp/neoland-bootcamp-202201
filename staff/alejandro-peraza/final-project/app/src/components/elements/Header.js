import './Header.sass'
import { IconProfile, IconHamburger, IconLogo } from '../icons'

function Header({ onHome, onProfile, onHamburger}) {

    const goToHome = event => {
        event.preventDefault()
        if(onHome) onHome()
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
            <a href='' className='IconLogo' onClick={goToHome}> <IconLogo /> </a>
            <a href='' className='IconProfile' onClick={goToProfile}> <IconProfile /> </a>
            <a href='' className='IconHamburger' onClick={goToHamburger}> <IconHamburger /> </a>

        </header>
    </>
}

export default Header