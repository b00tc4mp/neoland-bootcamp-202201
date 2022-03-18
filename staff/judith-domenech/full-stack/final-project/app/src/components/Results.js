import './Results.css'
import { useEffect, useState } from 'react'
import { searchRackets, toggleFavoriteRacket} from '../logic'

function Results ({ token, query, onItem }) {
    const[rackets, setRackets] = useState([])

    useEffect(() => {
        try {
            searchRackets(query)
                .then(rackets => setRackets(rackets))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const goToItem = id => {
        onItem(id)
    } 

/*     const toggleFavRackets = racketId => {
        try {
            toggleFavoriteRackets(token, racketId)
                .then(() =>
                searchRackets(token, query)
                        .then(rackets => {
                            debugger
                            setRackets(rackets)
                        })
                        .catch(error => alert(error.message))
                )
        } catch (error) {
            alert(error.message)
        }
    } */

    return <div className="results">
      {!!rackets.length && <div className='results__list-items'>
         <ul className="results__list">
            {rackets.map(racket => <li key={racket.id} className="results__item" onClick={() => goToItem(racket.id)}>
                <h2>{racket.brand}</h2>
{/* 
                <div>
                    <span className="results__item-fav-button" onClick={event => {
                        event.stopPropagation()

                        toggleFavRackets(racket.id)
                    }}>{racket.favorite ? '❤️' : '💛'}</span>
                </div> */}

                <img src={racket.model} />
                <span>{racket.price} $</span>
                
            </li>)}
        </ul>
        </div>}
    </div>
}

export default Results