import './ListFavoriteActions.sass'
import { useState, useEffect } from 'react'
import { listFavoriteActions } from '../logic'
import { ActionCard, ActionsNavigationBar } from '../components'

export const ListFavoriteActions = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites, goToCreateSchedule: _goToCreateSchedule, goToUserProfile: _goToUserProfile }) => {

    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const favorites = await listFavoriteActions(sessionStorage.token)
            favorites.forEach(favorite => favorite.isFav = true)

            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onSchedules = event => {
        _onSchedules && _onSchedules(event)
    }

    const onCreatedActions = event => {
        _onCreatedActions && _onCreatedActions(event)
    }

    const onFavorites = event => {
        _onFavorites && _onFavorites(event)
    }

    const goToCreateSchedule = actionId => {
        _goToCreateSchedule && _goToCreateSchedule(actionId)
    }

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Mis Favoritas</h2>
            {!!favorites.length &&
                <ul> {favorites.map(favorite =>
                    <li key={favorite.id}><ActionCard action={favorite} onCreateSchedule={goToCreateSchedule} onUserProfile={goToUserProfile} /></li>)}
                </ul>}
        </div>
    </>
}