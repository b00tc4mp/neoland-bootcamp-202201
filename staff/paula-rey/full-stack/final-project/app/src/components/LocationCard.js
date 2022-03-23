import './LocationCard.sass'
import { FavoriteButton } from '.'
import { useState } from'react'


export function LocationCard({location: _location, isFavorite}) {

    const[location, setLocation] = useState(_location || {})
    
    return <div className='location-card'>
        <FavoriteButton locationId={location.id} isFavorite={isFavorite}/>
        <h1>{location.title}</h1>
        <h2>{location.type}</h2>
        <img src={location.urlImage}/>
        <p>{location.city}</p>
        
    </div>
}



