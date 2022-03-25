import './NavigationMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, LocationIcon } from '.'


export function NavigationMenu() {

    return <>
        <nav>
            <ul>
                <li>
                    <Link><LocationIcon/>Buscador</Link>
                </li>
                <li>
                    <Link><FavoriteIcon/>Favoritas</Link>
                </li>
                <li>
                    <Link><ProfileIcon/>Perfil</Link>
                </li>
            </ul>
        </nav>
    
    </>

}