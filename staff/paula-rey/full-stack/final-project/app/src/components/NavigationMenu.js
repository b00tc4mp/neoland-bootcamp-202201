import './NavigationMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, LocationIcon } from '.'


export function NavigationMenu() {

    return <>
        <nav>
            <ul>
                <li><Link><LocationIcon/></Link>Buscador</li>
                <li><Link><FavoriteIcon/></Link>Favoritas</li>
                <li><Link><ProfileIcon/></Link>Perfil</li>
            </ul>
        </nav>
    
    </>

}