import './ListFavoriteActions.sass'
import { useState, useEffect } from 'react'
import { listFavoriteActions } from '../logic'
import { ActionCard } from '.'

export const ListFavoriteActions = () => {

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


    return <>
        <div>
            <h2>Mis Favoritas</h2>
            {!!favorites.length &&
                <ul> {favorites.map(favorite =>
                    <li key={favorite.id}>
                        <ActionCard action={favorite} />
                    </li>
                )}
                </ul>}
        </div>
    </>
}