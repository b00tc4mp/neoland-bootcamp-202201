import './ListActions.sass'
import { useState, useEffect } from 'react'
import { listActions } from '../logic'
import { OwnerActionCard } from '.'

export const ListActions = ({ goToCreateSchedule: _goToCreateSchedule, goToEditAction: _goToEditAction }) => {

    const [actions, setActions] = useState([])

    useEffect(async () => {
        try {
            const actions = await listActions(sessionStorage.token)
            setActions(actions)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goToCreateSchedule = actionId => {
        _goToCreateSchedule && _goToCreateSchedule(actionId)
    }

    const goToEditAction = actionId => {
        _goToEditAction && _goToEditAction(actionId)
    }

    return <>
        <div>
            {!!actions.length &&
                <ul> {actions.map(action =>
                    <li key={action.id}><OwnerActionCard action={action} onCreateSchedule={goToCreateSchedule} onEditAction={goToEditAction} /></li>)}
                </ul>}
        </div>
    </>

}