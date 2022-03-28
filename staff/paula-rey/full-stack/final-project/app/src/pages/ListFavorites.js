import './ListFavorites.sass'
import { useState, useEffect } from 'react'
import { listFavoritesLocations } from '../logic'
import { LocationCard } from '../components'

export function ListFavorites({ goToLocationDetails: _goToLocationDetails}) {
    const [favorites, setFavorites] = useState([])


    useEffect(async() => {
        try {
            const favorites = await listFavoritesLocations(sessionStorage.token)

            favorites.forEach(favorite => favorite.isFavorite = true)
            
            setFavorites(favorites)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goToLocationDetails = locationId => {
        _goToLocationDetails && _goToLocationDetails(locationId)
    }

    return <div>
         {!!favorites.length && <ul>
            {favorites.map(favorite => 
            <li key={favorite.id} /*onClick={() => goToLocation(location.id)}*/>
                <LocationCard location={favorite} onLocationCard={goToLocationDetails} /> 
            </li>)}
            </ul>}
    </div>
}