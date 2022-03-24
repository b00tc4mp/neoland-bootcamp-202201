import './ActsNavigationBar.sass'
import { Link, CalendarIcon, EditIcon, FavoriteIcon } from '.'

export const ActsNavigationBar = () => {

    return <>
        <nav>
            <ul>
                <li><Link><CalendarIcon /></Link></li>
                <li><Link><EditIcon /></Link></li>
                <li><Link><FavoriteIcon /></Link></li>
            </ul>
        </nav>
    </>
}