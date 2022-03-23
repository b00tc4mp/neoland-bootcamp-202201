import './ActionCard.sass'
import { Link, CalendarIcon, ToggleFavoriteButton } from '.'
import { useState } from 'react'

export const ActionCard = ({ action: _action }) => {

    const [action, setAction] = useState(_action || {})

    return <>
        <div >
            <h3>{action.description}</h3>
            <p>Tiempo requerido: {action.requiredTime} min</p>
            <p>Dinero requerido: {action.requiredBudget} €</p>
            <Link>
                <CalendarIcon />
            </Link>
            <ToggleFavoriteButton action={action} />
            <span>By: {action.authorUsername}</span>
        </div>
    </>
}