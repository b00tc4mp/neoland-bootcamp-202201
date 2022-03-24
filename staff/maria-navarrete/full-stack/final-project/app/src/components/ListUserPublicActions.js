import './ListUserPublicActions.sass'
import { useState, useEffect } from 'react'
import { listUserPublicActions, listFavoriteActions } from '../logic'
import { ActionCard } from '.'

export const ListUserPublicActions = ({ userId = '' }) => {

    const [actions, setActions] = useState([])

    useEffect(async () => {
        try {
            const actions = await listUserPublicActions(sessionStorage.token, userId)
            const favorites = await listFavoriteActions(sessionStorage.token)

            actions.forEach(action => {
                action.isFav = favorites.some(favorite => favorite.id === action.id)
            })
            
            setActions(actions)
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <>
        <div>
            {!!actions.length &&
                <ul> {actions.map(action =>
                    <li key={action.id}>
                        <ActionCard action={action} />
                    </li>
                )}
                </ul>}
        </div>
    </>

}