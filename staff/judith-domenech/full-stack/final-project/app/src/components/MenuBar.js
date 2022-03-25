import './MenuBar.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon, Profile, ListFavoritesRackets, SearchUserRacket } from '.'

export function MenuBar() {



    return <>
        <nav>
            <ul>
                <li> 
                    <Link /* onClick={goToProfile} */> <ProfileIcon />Perfil</Link>
                </li>
                <li> 
                    <Link /* onClick={goToFavorites} */><FavoriteIcon />Favoritos</Link> 
                </li>
                <li> 
                    <Link /* onClick={goToSearchUserRacket} */><RacketIcon />Tu pala</Link>
                </li>
            </ul>

          
        </nav>
    </>
}