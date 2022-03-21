import './IconFavorite.sass'
import { useState, useEffect } from 'react'
import { toggleFavoriteLocation } from '../../logic'

function IconFavorite({ locationId, isFavorite = false }) {
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
        <button type="button" onClick={onToggle}>{favorite ? '🧡' : '🤍'}</button>
    </>
}

export default IconFavorite




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