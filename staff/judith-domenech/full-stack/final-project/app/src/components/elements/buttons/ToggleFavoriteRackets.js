import './ToggleFavoriteRackets.sass'
import { useState } from 'react'
import { toggleFavoriteRacket } from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'


export function ToggleFavoriteRackets({ racket }) {

    const [favorite, setFavorite] = useState(racket.isFavorite)

    const toggleFavorite = async () => {
        try {
            await toggleFavoriteRacket(sessionStorage.token, racket.id)
            setFavorite(!favorite)
        } catch (error) {
            alert(error.message)
        }
    }

    const onToggle = event => {
        event.preventDefault()
        toggleFavorite()
    }

    return <>
        <Button type='button' onClick={onToggle}>
            <FavoriteIcon className={`${favorite ? 'favorite-on' : 'favorite-off'}`}/>
        </Button>
    </>
}




/* const foo = async () => {
    try {
        // do something
    } catch (error) {
        console.error(error)
    }
} */