import './Details.sass'
import { useState, useEffect } from 'react'
import { retrieveLocation, listFavoritesLocations} from '../logic'
import { ListComments } from './ListComments'
import { FavoriteButton } from './'

export function Details({locationId}) {
    const [location, setLocation] = useState({})

    useEffect(async() => {
        try {
            const location = await retrieveLocation(sessionStorage.token, locationId)
            const favorites = await listFavoritesLocations(sessionStorage.token)

            location.isFavorite = favorites.some(({id}) => id === location.id)
            setLocation(location)
            
        } catch (error) {
            alert (error.message)
        }
    }, [])

    return <div className='details'>
        <FavoriteButton location={location}/>
        <h1>{location.title}</h1>
        <p>{new Date(location.date).toLocaleDateString()}</p>
        <img src={location.image}/>
        <h2>{location.type}</h2>
        <p>{location.address}</p>
        <p>{location.city}</p>
        <ListComments locationId={locationId}/>
    </div>
}

