import './LocationCard.sass'
import { FavoriteButton } from '.'
import { useState } from'react'


export function LocationCard({location: _location}) {

    const[location, setLocation] = useState(_location || {})
    
    return <div className='location-card'>
        <FavoriteButton location={location}/>
        <h1>{location.title}</h1>
        <h2>{location.type}</h2>
        <img src={location.image}/>
        <p>{location.city}</p>
        
    </div>
}



