import './RacketsCard.sass'
import { useState } from 'react'
import { ToggleFavoriteRackets } from '.'

export function RacketsCard({ racket: _racket }) {
    const [racket, setRacket] = useState(_racket || {})
    return <div className='racket-card'>

        <img src={racket.image} />
        <div>
            <h3 className='racket-card__brand'>{racket.brand}</h3>
            <p className='racket-card__model'>{racket.model}</p>
            <p className='racket-card__price'>{racket.price}€</p>
        </div>
        <div className='racket-card__toggle-favorite'>
            {sessionStorage.token && <ToggleFavoriteRackets racket={racket} />}
        </div>
    </div>
}



