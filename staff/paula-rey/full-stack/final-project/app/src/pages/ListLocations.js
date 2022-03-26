import './ListLocations.sass'
import { useState, useEffect } from 'react'
import { listLocations } from '../logic'
import { OwnerLocationCard } from '../components/'

export function ListLocations() {
    const [locations, setLocations] = useState([])


    useEffect(async() => {
        try {
            const locations = await listLocations(sessionStorage.token)
            setLocations (locations)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
         {!!locations.length && <ul>
            {locations.map(location => 
            <li key={location.id}>
                <OwnerLocationCard location={location} /> 
            </li>)}
            </ul>}
    </div>
}