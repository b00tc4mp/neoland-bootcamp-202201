import './IconFavorite.sass'
import { useState } from 'react'
import { toggleFavoriteRacket } from '../../logic'
import heartOn from '../../assets/heart-on.png'
import heartOff from '../../assets/heart-off.png'

function IconFavorite({ racketId = '', isFavorite = false }) {

    const [favorite, setFavorite] = useState(isFavorite)

    const toggleFavorite = async () => {
        try {
            await toggleFavoriteRacket(sessionStorage.token, racketId)
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
        <button type='button' onClick={onToggle}> {favorite ? '✧' : '✦'}</button>
    </>
}

export default IconFavorite


/* const foo = async () => {
    try {
        // do something
    } catch (error) {
        console.error(error)
    }
} */