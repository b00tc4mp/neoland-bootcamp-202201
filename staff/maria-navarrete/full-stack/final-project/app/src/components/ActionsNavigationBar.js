import './ActionsNavigationBar.sass'
import { Link, CalendarIcon, EditIcon, FavoriteIcon } from '.'

export const ActionsNavigationBar = ({ onSchedules, onCreatedActions, onFavorites }) => {

    
    return <nav className='navigationActions'>
            <ul className='navigationActions__list'>
                <li className='navigationActions__listItem'><Link onClick={onSchedules}><CalendarIcon className='navigationActions__icon' /></Link></li>
                <li className='navigationActions__listItem'><Link onClick={onCreatedActions}><EditIcon className='navigationActions__icon' /></Link></li>
                <li className='navigationActions__listItem'><Link onClick={onFavorites}><FavoriteIcon className='navigationActions__icon' /></Link></li>
            </ul>
        </nav>
}