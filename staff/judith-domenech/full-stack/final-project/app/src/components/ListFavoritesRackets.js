import './ListFavoritesRackets'
import { useState, useEffect } from 'react'
import { listFavoritesRackets } from '../logic'
import { RacketsCard } from '.'



export function ListFavoritesRackets({ }) {
    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const favorites = await listFavoritesRackets(sessionStorage.token)
            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <>
        {!!favorites.length &&
            <ul>
                {favorites.map(racket => 
                <li key={racket.id}>
                    <RacketsCard racket={racket} isFavorite={true} />
                </li>)}
            </ul>
        }
    </>

}
