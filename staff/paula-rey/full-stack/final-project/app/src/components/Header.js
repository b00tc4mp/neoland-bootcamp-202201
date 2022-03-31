import './Header.sass'
import { Link, Logo, Button } from './'


export function Header({onLogo}) {

    const goToHome = event => {
        event.preventDefault()
        onLogo(event)
    }
    

    return <>
       <header className="header">
            <Link className="logo" onClick={goToHome} ><Logo/></Link>
            <h1 className="name">Dogether</h1>
       </header>
    
    </>

}