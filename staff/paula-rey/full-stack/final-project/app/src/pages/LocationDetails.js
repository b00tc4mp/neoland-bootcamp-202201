import './LocationDetails.sass'
import { useState, useEffect } from 'react'
import { retrieveLocation, listFavoritesLocations } from '../logic'
import { FavoriteButton, CommentIcon, Link, ListComments } from '../components'
import { useParams } from 'react-router-dom'

export function LocationDetails({ onAddComment, onToggled }) {
    const { locationId } = useParams()

    const [location, setLocation] = useState({})
    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const location = await retrieveLocation(sessionStorage.token, locationId)
            const favorites = await listFavoritesLocations(sessionStorage.token)

            location.isFavorite = favorites.some(({ id }) => id === location.id)
            setLocation(location)

        } catch (error) {
            alert(error.message)
        }
    }, [])


    const goToAddComment = locationId => {
        onAddComment(locationId)
    }


    return <>
        <div className='details'>
            <FavoriteButton locationId={location.id} isFavorite={location.isFavorite} onToggled={onToggled} />
            <h1>{location.title}</h1>
            <p>{new Date(location.date).toLocaleDateString()}</p>
            <img src={location.image} />
            <h2>{location.type}</h2>
            <p>{location.address}</p>
            <p>{location.city}</p>
            <Link onClick={goToAddComment}><CommentIcon /></Link>
            <ListComments locationId={locationId} />
        </div>
    </>
}

