import './LocationCard.sass'
import { FavoriteButton, Link } from './'
import { useState } from'react'


export function LocationCard({location: _location, onLocationCard}) {

    const[location, setLocation] = useState(_location || {})

    const goToLocationDetails = event => {
        //event.preventDefault()
        onLocationCard && onLocationCard(event)
    }

    return <div className='location-card'>
        <FavoriteButton location={location}/>
        <h1>{location.title}</h1>
        <h2>{location.type}</h2>
        <img src={location.image}/>
        <Link onClick={goToLocationDetails}>
            <p>{location.city}</p>
        </Link>
    </div>
}


