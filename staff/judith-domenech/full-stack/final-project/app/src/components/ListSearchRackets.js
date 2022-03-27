import './ListFavoritesRackets.sass'
import { useEffect, useState } from 'react'
import { RacketsCard } from '.'
import { searchRackets, listFavoritesRackets } from '../logic'

export function ListSearchRackets({ query = '' }) {
    const [rackets, setRackets] = useState([])

    useEffect(async () => {
        try {
            const rackets = await searchRackets(query)
            const favorites = await listFavoritesRackets(sessionStorage.token)
            rackets.forEach(racket => {
                racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            })
            setRackets(rackets)

        } catch (error) {
            alert(error.message)
        }
    }, [query])

    return <>
        {!!rackets.length &&
            <ul>
                {rackets.map(racket =>
                    <li key={racket.id} /* className="results__item" onClick={() => goToItem(vehicle.id)} */>
                        <RacketsCard racket={racket} />
                    </li>)}
            </ul>
        }
    </>
}