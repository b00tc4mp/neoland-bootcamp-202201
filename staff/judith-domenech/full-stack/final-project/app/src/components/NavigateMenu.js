import './NavigateMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon, SearchIcon } from '.'

export function NavigateMenu({onProfile, onFavorites, onSearchUserRacket, onHome}) {
    
    return <div className='navigate__container'>
        <nav className='navigate__menu'>
                    <Link onClick={onHome}><SearchIcon />Buscador </Link>
                    <Link onClick={onProfile}> <ProfileIcon />Perfil</Link>
                    <Link onClick={onFavorites}><FavoriteIcon />Favoritos</Link> 
                    <Link onClick={onSearchUserRacket}><RacketIcon className='icon-medium'/>Tu pala</Link>   
        </nav>
    </div>
}