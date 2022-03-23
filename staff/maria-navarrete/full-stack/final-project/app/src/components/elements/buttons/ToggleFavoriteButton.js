import './ToggleFavoriteButton.sass'
import { useState } from 'react'
import { toggleFavoriteAction } from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'


export const ToggleFavoriteButton = ({ action }) => {

    const [favorite, setFavorite] = useState(action.isFav)

    const toggleFavorite = async () => {
        try {
            await toggleFavoriteAction(sessionStorage.token, action.id)
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
        <Button type="button" onClick={onToggle}>
            <FavoriteIcon className={`${favorite ? 'favorite-on' : 'favorite-off'}`} />
        </Button>
    </>
}

