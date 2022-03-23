import './ListFavoritesRackets'
import { useState, useEffect } from 'react'
import { listFavoritesRackets } from '../logic'
import { RacketsCard } from '.'



export function ListFavoritesRackets() {
    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const favorites = await listFavoritesRackets(sessionStorage.token)
            favorites.forEach(favorite => favorite.isFavorite = true)
            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <>
        {!!favorites.length &&
            <ul>
                {favorites.map(favorite =>
                    <li key={favorite.id}>
                        <RacketsCard racket={favorite}  />
                    </li>)}
            </ul>
        }
    </>

}
