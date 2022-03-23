import './RacketsCard.sass'
import { useState } from 'react'
import { ToggleFavoriteRackets } from '.'

export function RacketsCard({ racket: _racket, isFavorite }) {

    const [racket, setRacket] = useState(_racket || {})
    return <>
        < ToggleFavoriteRackets racketId={racket.id} isFavorite={isFavorite}/>
        <h3>{racket.brand}</h3>
        <p>{racket.model}</p>
        <img src={racket.image} />
        <p>{racket.price}€</p>

    </>
}



