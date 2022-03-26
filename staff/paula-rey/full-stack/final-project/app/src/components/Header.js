import './Header.sass'
import { Link, Logo, Button, LogoutIcon } from './'


export function Header({onLogo, onLogOut}) {

    const goToHome = event => {
        //event.preventDefault()
        onLogo && onLogo(event)
    }

    return <>
       <header>
            <Link onClick={goToHome} ><Logo/></Link>
            <h1>Dogether</h1>
            <Button ><LogoutIcon/></Button>
       </header>
    
    </>

}