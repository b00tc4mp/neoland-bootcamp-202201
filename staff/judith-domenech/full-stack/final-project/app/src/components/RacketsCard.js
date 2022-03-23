import './RacketsCard.sass'
import { useState } from 'react'
import { ToggleFavoriteRackets } from '.'

export function RacketsCard({ racket: _racket}) {

    const [racket, setRacket] = useState(_racket || {})
    return <>
        < ToggleFavoriteRackets racket={racket} />
        <h3>{racket.brand}</h3>
        <p>{racket.model}</p>
        <img src={racket.image} />
        <p>{racket.price}€</p>

    </>
}



