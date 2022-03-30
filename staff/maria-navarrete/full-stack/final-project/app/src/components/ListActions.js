import './ListActions.sass'
import { useState, useEffect } from 'react'
import { listActions } from '../logic'
import { OwnerActionCard } from '.'

export const ListActions = ({ goToCreateSchedule, goToEditAction }) => {

    const [actions, setActions] = useState([])

    useEffect(async () => {
        try {
            const actions = await listActions(sessionStorage.token)
            setActions(actions)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateActionsList = async () => {
        try {
            const actions = await listActions(sessionStorage.token)
            setActions(actions)
        } catch (error) {
            alert(error.message)
        }
    }


    return <>
        <div>
            {!!actions.length &&
                <ul> {actions.map(action =>
                    <li key={action.id}><OwnerActionCard action={action} onCreateSchedule={goToCreateSchedule} onEditAction={goToEditAction} onDeleted={updateActionsList} /></li>)}
                </ul>}
        </div>
    </>

}