import './Favorites.sass'
import { useEffect, useState } from 'react'
import { listFavoritesRackets } from '../logic'


function Favorites() {

    useEffect(async () => {
        try {
            await listFavoritesRackets(sessionStorage.token)
        } catch (error) {
            alert(error.message)
        }
    }, []);

    return <> {/* {rackets.length < 0 ?
            <div className='results__list-items'>
                <ul className="favs__list">
                    {rackets.map(racket => <li key={racket.id} className="favs__item">
                        <h2>{racket.model}</h2>

                        <span className="favs__item-fav-button" onClick={event => {
                            event.stopPropagation()

                        }}>✦</span>

                        <img className='favs__item-fav-image' src={racket.image} />
                        <span>{racket.price}€</span>
                    </li>)}
                </ul>

        </div> : <p className='favs__empty'>No favs yet</p>
    } */}</>
}

export default Favorites