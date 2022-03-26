import './LocationDetails.sass'
import { useState, useEffect } from 'react'
import { retrieveLocation, listFavoritesLocations} from '../logic'
import { ListComments } from '../components/ListComments'
import { FavoriteButton, CommentIcon, Link } from '../components'

export function LocationDetails({locationId}) {
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
        <Link><CommentIcon/></Link>
        <ListComments locationId={locationId}/>
    </div>
}

