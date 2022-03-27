import './OwnerActionCard.sass'
import { Link, CalendarIcon, DeleteActionButton, EditIcon } from '.'

export const OwnerActionCard = ({ action = {}, onCreateSchedule: _onCreateSchedule, onEditAction: _onEditAction }) => {

    const onCreateSchedule = actionId => {
        _onCreateSchedule && _onCreateSchedule(actionId)
    }

    const onEditAction = actionId => {
        _onEditAction && _onEditAction(actionId)
    }

    return <>
        <div >
            <h3>{action.description}</h3>
            <p>Tiempo requerido: {action.requiredTime} min</p>
            <p>Dinero requerido: {action.requiredBudget} €</p>
            <p>Estado: {action.public ? 'Pública' : 'Privada'}</p>
            <Link onClick={() => onCreateSchedule(action.id)}><CalendarIcon /></Link>
            <Link onClick={() => onEditAction(action.id)}><EditIcon /></Link>
            <DeleteActionButton actionId={action.id} />
        </div>
    </>
}