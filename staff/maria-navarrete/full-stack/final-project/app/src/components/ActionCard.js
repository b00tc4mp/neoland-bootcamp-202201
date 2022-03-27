import './ActionCard.sass'
import { Link, CalendarIcon, ToggleFavoriteButton } from '.'

export const ActionCard = ({ action = {}, onCreateSchedule: _onCreateSchedule, onUserProfile: _onUserProfile }) => {

    const onCreateSchedule = actionId => {
        _onCreateSchedule && _onCreateSchedule(actionId)
    }

    const onUserProfile = userId => {
        _onUserProfile && _onUserProfile(userId)
    }

    return <>
        <div >
            <h3>{action.description}</h3>
            <p>Tiempo requerido: {action.requiredTime} min</p>
            <p>Dinero requerido: {action.requiredBudget} €</p>
            <Link onClick={event => onCreateSchedule(action.id)}><CalendarIcon /></Link>
            <ToggleFavoriteButton actionId={action.id} isFavorite={action.isFav} />
            <Link onClick={event => onUserProfile(action.authorId)}>By: {action.authorUsername}</Link>
        </div>
    </>
}