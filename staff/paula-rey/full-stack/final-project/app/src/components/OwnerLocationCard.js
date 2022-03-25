import './OwnerLocationCard.sass'
import { EditIcon, DeleteIcon, Link, Button } from '.'
import { useState } from 'react'


export function OwnerLocationCard({ location: _location }) {

    const[location, setLocation] = useState(_location || {})

    return <div className='user-location-card'>
        <h1>{location.title}</h1>
        <h2>{location.type}</h2>
        <img src={location.image} />
        <p>{location.city}</p>

        <Link>
            <EditIcon />
        </Link>
        <Button>
            <DeleteIcon />
        </Button>

    </div>
}



