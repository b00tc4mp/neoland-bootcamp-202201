import './ListFavoriteActions.sass'
import { useState, useEffect } from 'react'
import { listFavoriteActions } from '../logic'
import { ActionCard, ActionsNavigationBar } from '../components'

export const ListFavoriteActions = ({ onSchedules, onCreatedActions, onFavorites, goToCreateSchedule, goToUserProfile }) => {

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

    const updateFavoritesList = async () => {
        try {
            const favorites = await listFavoriteActions(sessionStorage.token)
            favorites.forEach(favorite => favorite.isFav = true)

            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div className='favorites'>
            <h2 className='favorites__title'>Mis Favoritas</h2>
            {!!favorites.length &&
                <ul> {favorites.map(favorite =>
                    <li key={favorite.id}><ActionCard action={favorite} onCreateSchedule={goToCreateSchedule} onUserProfile={goToUserProfile} onToggled={updateFavoritesList} /></li>)}
                </ul>}
        </div>
    </>
}