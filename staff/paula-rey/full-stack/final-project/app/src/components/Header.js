import './Header.sass'
import { Link, Logo, LogoutIcon } from '.'


export function Header() {

    return <>
       <header>
           <Logo/>
           <h1>Dogether</h1>
            <Link>
                <LogoutIcon/>
            </Link>
       </header>
    
    </>

}