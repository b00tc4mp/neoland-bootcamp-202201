import './ListLocations.sass'
import { useState, useEffect } from 'react'
import { listLocations } from '../logic'
import { OwnerLocationCard } from '../components/'

export function ListLocations({ goToLocationDetails: _goToLocationDetails, goToUpdateLocation: _goToUpdateLocation }) {
    const [locations, setLocations] = useState([])


    useEffect(async () => {
        try {
            const locations = await listLocations(sessionStorage.token)
            setLocations(locations)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goToLocationDetails = locationId => {
        _goToLocationDetails && _goToLocationDetails(locationId)
    }

    const goToUpdateLocation = locationId => {
        _goToUpdateLocation && _goToUpdateLocation(locationId)
    }

    return <div>
        {!!locations.length && <ul>
            {locations.map(location =>
                <li key={location.id}>
                    <OwnerLocationCard location={location} onOwnerLocationCard={goToLocationDetails} onUpdateLocation={goToUpdateLocation} />
                </li>)}
        </ul>}
    </div>
}