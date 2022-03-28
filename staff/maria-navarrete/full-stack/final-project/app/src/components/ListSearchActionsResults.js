import './ListSearchActionsResults.sass'
import { findActions, listFavoriteActions } from '../logic'
import { ActionCard } from '.'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const ListSearchActionsResults = ({ goToCreateSchedule, goToUserProfile }) => {

    const [actions, setActions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query')
    const _requiredTime = searchParams.get('requiredTime')
    const _requiredBudget = searchParams.get('requiredBudget')

    useEffect(async () => {
        try {

            const requiredTime = _requiredTime ? Number(_requiredTime) : ''
            const requiredBudget = _requiredBudget ? Number(_requiredBudget) : ''

            const actions = await findActions(sessionStorage.token, query, requiredTime, requiredBudget)
            const favorites = await listFavoriteActions(sessionStorage.token)

            actions.forEach(action => {
                action.isFav = favorites.some(favorite => favorite.id === action.id)
            })

            setActions(actions)

        } catch (error) {
            alert(error.message)
        }
    }, [query, _requiredTime, _requiredBudget])


    return <>
        <div>
            {!!actions.length &&
                <ul> {actions.map(action =>
                    <li key={action.id}><ActionCard action={action} onCreateSchedule={goToCreateSchedule} onUserProfile={goToUserProfile} /></li>)}
                </ul>}
        </div>
    </>


}