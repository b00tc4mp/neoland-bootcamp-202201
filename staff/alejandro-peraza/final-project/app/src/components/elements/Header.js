import './Header.sass'
import { IconProfile, IconLogo } from '../icons'

function Header({ onHome, onProfile}) {

    const goToHome = event => {
        event.preventDefault()
        if(onHome) onHome()
    }
    const goToProfile = event => {
        event.preventDefault()
        if(onProfile) onProfile()
    }
    

    return(
            
        <header className='header'>
          
            <a href='' className='IconLogo' onClick={goToHome}> <IconLogo /> </a>
            <h2 className='header_Title'>Welcome To CFD</h2>
            <a href='' className='IconProfile' onClick={goToProfile}> <IconProfile /> </a>
         
        </header>
    )
}
export default Header