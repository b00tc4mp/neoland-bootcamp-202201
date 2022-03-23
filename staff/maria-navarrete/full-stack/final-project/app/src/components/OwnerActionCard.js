import './OwnerActionCard.sass'
import { useState } from 'react'
import { Link, CalendarIcon, Button, DeleteIcon, EditIcon } from '.'

export const OwnerActionCard = ({ action: _action }) => {

    const [action, setAction] = useState(_action || {})

    return <>
        <div >
            <h3>{action.description}</h3>
            <p>Tiempo requerido: {action.requiredTime} min</p>
            <p>Dinero requerido: {action.requiredBudget} €</p>
            <p>Estado: {action.public ? 'Pública' : 'Privada'}</p>
            <Link>
                <CalendarIcon />
            </Link>
            <Link>
                <EditIcon />
            </Link>
            <Button>
                <DeleteIcon />
            </Button>
        </div>
    </>
}