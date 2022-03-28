import './ActionsNavigationBar.sass'
import { Link, CalendarIcon, EditIcon, FavoriteIcon } from '.'

export const ActionsNavigationBar = ({ onSchedules, onCreatedActions, onFavorites }) => {

    
    return <>
        <nav>
            <ul>
                <li><Link onClick={onSchedules}><CalendarIcon /></Link></li>
                <li><Link onClick={onCreatedActions}><EditIcon /></Link></li>
                <li><Link onClick={onFavorites}><FavoriteIcon /></Link></li>
            </ul>
        </nav>
    </>
}