import './ListSearchActionsResults.sass'
import { findActions, listFavoriteActions } from '../logic'
import { ActionCard } from '.'
import { useState, useEffect } from 'react'

export const ListSearchActionsResults = ({ query = '', requiredTime = '', requiredBudget = '' }) => {

    const [actions, setActions] = useState([])

    useEffect(async () => {
        try {
            const actions = await findActions(sessionStorage.token, query, requiredTime, requiredBudget)
            const favorites = await listFavoriteActions(sessionStorage.token)

            actions.forEach(action => {
                action.isFav = favorites.some(favorite => favorite.id === action.id)
            })

            setActions(actions)

        } catch (error) {
            alert(error.message)
        }
    }, [query, requiredTime, requiredBudget])

    return <>
        <div>
            {!!actions.length &&
                <ul> {actions.map(action =>
                    <li key={action.id}><ActionCard action={action} /></li>)}
                </ul>}
        </div>
    </>


}