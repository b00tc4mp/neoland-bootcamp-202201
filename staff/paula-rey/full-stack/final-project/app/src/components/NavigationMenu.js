import './NavigationMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, SearchLocationIcon } from '.'


export function NavigationMenu({ onSearchLocationIcon, onFavoritesIcon, onProfileIcon }) {

    const goToHome = event => {
        //event.preventDefault()
        onSearchLocationIcon && onSearchLocationIcon(event)
    }

    const goToListFavorites = event => {
        //event.preventDefault()
        onFavoritesIcon && onFavoritesIcon(event)
    }

    const goToProfile = event => {
        //event.preventDefault()
        onProfileIcon && onProfileIcon(event)
    }

    return <>
        <nav>
            <ul>
                <li><Link onClick={goToHome}><SearchLocationIcon/>Buscador</Link></li>
                <li><Link onClick={goToListFavorites}><FavoriteIcon/>Favoritas</Link></li>
                <li><Link onClick={goToProfile}><ProfileIcon/>Perfil</Link></li>
            </ul>
        </nav>
    
    </>

}