import './ListFavoritesRackets.sass'
import { useEffect, useState } from 'react'
import { RacketsCard } from '.'
import { searchRackets, listFavoritesRackets } from '../logic'

export function ListSearchRackets({ query = ''}) {
    const [rackets, setRackets] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const rackets = await searchRackets(query)
            const favorites = await listFavoritesRackets(sessionStorage.token)
            setRackets(rackets)
            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    return <>
        {!!rackets.length &&
            <ul>
                {rackets.map(racket =>
                    <li key={racket.id}>
                        <RacketsCard racket={racket} isFavorite={favorites.some(({id}) => id === racket.id)} />
                    </li>)}
            </ul>
        }
    </>
}