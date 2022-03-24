import './Header.sass'
import { IconLogo, IconProfile, IconHamburger } from '../icons'

function Header( {onLogo, onProfile, onBurger}) {

    const goToLogo = event => {
        event.preventDefault()
        if(onLogo) onLogo()
    }

    const goToProfile = event => {
        event.preventDefault()
        if(onProfile) onProfile()
    }

    const goToBurger = event => {
        event.preventDefault()
        if(onBurger) onBurger()
    }

    return <>
        <header className='header'>
            <a href='' onClick={goToLogo}>
                <IconLogo />
            </a>

            <a href='' onClick={goToProfile}>
                <IconProfile />
            </a>

            <a  href='' onClick={goToBurger}>
                <IconHamburger />
            </a>

        </header>
    </>
}

export default Header