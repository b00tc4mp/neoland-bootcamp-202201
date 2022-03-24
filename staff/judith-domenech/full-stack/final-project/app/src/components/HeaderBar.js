import {Logo, Link } from '.'
import './HeaderBar.sass'

export function HeaderBar(){
    return <>
        <nav>
            <ul>
                <li><Link><Logo /></Link></li>
               {sessionStorage.token && <li><Link>login</Link></li>}
            </ul>
        </nav>
    
    </>
}