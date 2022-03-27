import './ActionsNavigationBar.sass'
import { Link, CalendarIcon, EditIcon, FavoriteIcon } from '.'

export const ActionsNavigationBar = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites }) => {

    const onSchedules = event => {
        _onSchedules && _onSchedules(event)
    }

    const onCreatedActions = event => {
        _onCreatedActions && _onCreatedActions(event)
    }

    const onFavorites = event => {
        _onFavorites && _onFavorites(event)
    }


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