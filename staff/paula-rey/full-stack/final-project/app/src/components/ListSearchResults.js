import './ListSearchResults.sass'
import { useEffect, useState } from 'react'
import { searchLocations, listFavoritesLocations } from '../logic'
import { LocationCard } from './'

export function ListSearchResults({ query='', type='', city='' }) {
    const [locations, setLocations] = useState([])
    const [favorites, setFavorites] = useState([])


    useEffect(async() => {
        try {
            const locations = await searchLocations(sessionStorage.token, query, type, city)
            const favorites = await listFavoritesLocations(sessionStorage.token)
            setLocations (locations)
            setFavorites (favorites)

        } catch (error) {
            alert(error.message)
        }
    }, [query, type, city])
    
    return <div>
         {!!locations.length && <ul>
            {locations.map(location => 
            <li key={location.id} /*onClick={() => goToLocation(location.id)}*/>
                <LocationCard location={location} isFavorite={favorites.some(({id}) => id === location.id)}/> 
            </li>)}
            </ul>}
    </div>

}
