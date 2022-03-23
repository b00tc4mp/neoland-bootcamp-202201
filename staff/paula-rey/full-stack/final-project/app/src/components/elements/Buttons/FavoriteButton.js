import './FavoriteButton.sass'
import { useState, useEffect } from 'react'
import { toggleFavoriteLocation } from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'

export function FavoriteButton({ locationId, isFavorite = false }) {
    const [favorite, setFavorite] = useState(isFavorite)

    const toggleFavorite = async () => {
        try {
            await toggleFavoriteLocation(sessionStorage.token, locationId)

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
            <FavoriteIcon className={`favorite-icon ${favorite ? 'favorite-full' : 'favorite-empty'}`} />
        </Button>
    </>
}






    // const toggleFavorite = event =>{
    //     try{
    //         toggleFavoriteLocation(sessionStorage.token, locationId)
    //             .then(()=>{
    //                 setFavorite(!favorite)
    //             })

    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    //     async function foo(){}
    //     const foo = async () => {}