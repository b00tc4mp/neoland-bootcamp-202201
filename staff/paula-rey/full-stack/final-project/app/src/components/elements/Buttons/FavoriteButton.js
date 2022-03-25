import './FavoriteButton.sass'
import { useState } from 'react'
import { toggleFavoriteLocation } from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'

export function FavoriteButton({ location }) {
    const [favorite, setFavorite] = useState(location.isFavorite)

    const toggleFavorite = async () => {
        try {
            await toggleFavoriteLocation(sessionStorage.token, location.id)
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
            <FavoriteIcon className={`${favorite ? 'favorite-full' : 'favorite-empty'}`} />
        </Button>
    </>
}

