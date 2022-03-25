import {Logo, Link } from '.'
import './HeaderBar.sass'

export function HeaderBar(){
    return <>
        <nav>
            <ul>
                <li><Link><Logo /></Link></li>
               {sessionStorage.token && <li><Link>Iniciar Sesión</Link></li>}
            </ul>
        </nav>
    
    </>
}