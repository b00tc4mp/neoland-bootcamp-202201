import './NavigateMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon, Profile, ListFavoritesRackets, SearchUserRacket } from '.'

export function NavigateMenu({onProfile}) {

    const goToProfile = event => {
        onProfile && onProfile(event)
    }

    return <div className='navigate__container'>
        <nav className='navigate__menu'>
                    <Link onClick={goToProfile}> <ProfileIcon />Perfil</Link>
                    <Link ><FavoriteIcon />Favoritos</Link> 
                    <Link ><RacketIcon className='icon-medium'/>Tu pala</Link>   
        </nav>
    </div>
}