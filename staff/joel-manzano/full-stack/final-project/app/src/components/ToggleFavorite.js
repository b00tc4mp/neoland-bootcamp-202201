import './ToggleFavorite.sass'
import { useState, useEffect } from 'react'
import { toggleFavorite} from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'


export function ToggleFavorite({ graffitiId, isFavorite = false, onToggled }) {

    const [favorite, setFavorite] = useState(isFavorite)

    const toggleFavorite = async () => {
      
        try {
            await toggleFavorite(sessionStorage.token, graffitiId)
            setFavorite(!favorite)
            onToggled && onToggled()
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