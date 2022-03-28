import './Header.sass'
import { Link, Logo, Button, LogoutIcon } from './'


export function Header({onLogo, onLogOut}) {

    const goToHome = event => {
        event.preventDefault()
        onLogo(event)
    }

    return <>
       <header className="header">
            <Link onClick={goToHome} ><Logo className="logo"/></Link>
            <h1>Dogether</h1>
            <Button ><LogoutIcon/></Button>
       </header>
    
    </>

}