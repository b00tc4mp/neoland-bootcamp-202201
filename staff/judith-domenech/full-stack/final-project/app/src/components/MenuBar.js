import './MenuBar.sass'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon } from '.'

export function MenuBar() {
    return <>
        <nav>
            <ul>
                <li> <Link><ProfileIcon />Perfil</Link> </li>
                <li> <Link><FavoriteIcon />Favoritos</Link> </li>
                <li><Link><RacketIcon />Tu pala</Link></li>
            </ul>
        </nav>
    </>
}