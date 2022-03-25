import './ListSearchUserRacket.sass'
import { useEffect, useState } from 'react'
import { RacketsCard } from '.'
import { searchUserRackets,listFavoritesRackets } from '../logic'

export function ListSearchUserRacket({type, weight, player, level }) {
    const [rackets, setRackets] = useState([])

    useEffect(async () => {
        try {
            const rackets = await searchUserRackets(sessionStorage.token, type, weight, player, level)
            const favorites = await listFavoritesRackets(sessionStorage.token)
            rackets.forEach(racket => {
                racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            }) 
            setRackets(rackets)

        } catch (error) {
            alert(error.message)
        }
    }, [type, weight, player, level])

    return <>
        {!!rackets.length &&
            <ul>
                {rackets.map(racket =>
                    <li key={racket.id}>
                        <RacketsCard racket={racket} />
                    </li>)}
            </ul>
        }
    </>
}