import './ActionCard.sass'
import { Link, CalendarIcon, ToggleFavoriteButton } from '.'

export const ActionCard = ({ action = {}, onCreateSchedule, onUserProfile, onToggled }) => {


    return <>
        <div >
            <h3>{action.description}</h3>
            <p>Tiempo requerido: {action.requiredTime} min</p>
            <p>Dinero requerido: {action.requiredBudget} €</p>
            <Link onClick={event => onCreateSchedule(action.id)}><CalendarIcon /></Link>
            <ToggleFavoriteButton actionId={action.id} isFavorite={action.isFav} onToggled={onToggled} />
            <Link onClick={event => onUserProfile(action.authorId)}>By: {action.authorUsername}</Link>
        </div>
    </>
}