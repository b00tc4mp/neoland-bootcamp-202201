import './Header.sass'
import { IconProfile, IconCheeseburger, IconLogo } from '../icons'

function Header({ onLogo, onProfile, onCheeseburger}) {

    const goToLogo = event => {
        event.preventDefault()
        if(onLogo) onLogo()
    }
    const goToProfile = event => {
        event.preventDefault()
        if(onProfile) onProfile()
    }
    const goToCheeseburger = event => {
        event.preventDefault()
        if(onCheeseburger) onCheeseburger()
    }

    return <>
        <header className='header'>

            <h1 className='header-title'>Dreams Factory</h1>
            <a href='' onClick={goToLogo}> <IconLogo /> </a>
            <a href='' onClick={goToProfile}> <IconProfile /> </a>
            <a href='' onClick={goToCheeseburger}> <IconCheeseburger /> </a>

        </header>
    </>
}

export default Header