import './Header.sass'
import { IconProfile, IconLogo} from '../icons'

function Header({onLogo, onProfile, onHamburger}) {

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
            <div className='header__all-wrapper'>
                <a href='' onClick={goToLogo}>
                    <IconLogo />
                </a>
                <div className='header__user-hamburguer-wrapper'>
                    <a href='' onClick={goToProfile}>
                        <IconProfile />
                    </a>
                </div>
            </div>
        </header>
    </>

}

export default Header