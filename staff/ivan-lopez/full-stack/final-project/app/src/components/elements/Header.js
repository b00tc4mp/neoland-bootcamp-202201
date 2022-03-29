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


    return <div>
        <header className='header'>

            <h1 className='header-title'>Dreams Factory</h1>
            <a className='header-iconLogo' href='' onClick={goToLogo} > <IconLogo /> </a>
            <a className='header-iconProfile' href='' onClick={goToProfile}> <IconProfile /> </a>

        </header>
    </div>
}

export default Header