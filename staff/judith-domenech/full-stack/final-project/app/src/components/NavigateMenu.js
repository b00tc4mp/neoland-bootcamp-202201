import './NavigateMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon, SearchIcon } from '.'

export function NavigateMenu({onProfile, onFavorites, onSearchUserRacket, onHome}) {

    const goToProfile = event => {
        event.preventDefault()
        onProfile && onProfile(event)
    }

    const goToFavorites = event => {
        event.preventDefault()
        onFavorites && onFavorites(event)
    }

    const goToSearchUserRacket = event => {
        event.preventDefault()
        onSearchUserRacket && onSearchUserRacket(event)
    }    

    const goToHome = event => {
        event.preventDefault()
        onHome && onHome(event)
    }    
    
    return <div className='navigate__container'>
        <nav className='navigate__menu'>
                    <Link onClick={goToHome}><SearchIcon />Buscador </Link>
                    <Link onClick={goToProfile}> <ProfileIcon />Perfil</Link>
                    <Link onClick={goToFavorites}><FavoriteIcon />Favoritos</Link> 
                    <Link onClick={goToSearchUserRacket}><RacketIcon className='icon-medium'/>Tu pala</Link>   
        </nav>
    </div>
}