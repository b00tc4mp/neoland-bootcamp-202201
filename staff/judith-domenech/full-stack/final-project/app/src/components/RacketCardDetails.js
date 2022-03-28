import './RacketCardDetails.sass'
import { retrieveRacket } from '../logic'
import { ToggleFavoriteRackets, CommentIcon, Link } from '.'
import { useEffect, useState } from 'react'
import { listFavoritesRackets } from '../logic'

export function RacketCardDetails({ racketId }) {
    const [racket, setRacket] = useState({})


    useEffect(async () => {
        try {
            const racket = await retrieveRacket(racketId)
            const favorites = await listFavoritesRackets(sessionStorage.token)
            racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            
            setRacket(racket)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        {sessionStorage.token && <ToggleFavoriteRackets racketId={racket.id} isFavorite={racket.isFavorite} />}
        <h1>{racket.brand}</h1>
        <img src={racket.image} />
        <p>Modelo: {racket.model}</p>
        <p>Precio: {racket.price}€</p>
        <p>Descripción: {racket.description}</p>
        <p>Nivel: {racket.level}</p>
        <p>Tipo: {racket.type}</p>
        <p>Tipo de Jugador: {racket.player}</p>
        <p>Peso: {racket.weight}</p>
        <div className='racket-details' >
            {sessionStorage.token && <Link><CommentIcon /></Link>}
        </div>

    </div>
}