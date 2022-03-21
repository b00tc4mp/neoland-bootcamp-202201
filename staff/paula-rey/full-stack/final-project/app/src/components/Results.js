import './Results.sass'
import { useEffect, useState } from 'react'
import { retrieveUser, searchLocations } from '../logic'

function Results({ filter, onItem }) {
    const [locations, setLocations] = useState([])
    const [name, setName] = useState('name')

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    useEffect(() => {
        try {
            searchLocations(filter)
                .then(locations => setLocations(locations))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [filter])

    const goToLocation = locationId => {
        onItem(locationId)
    }

    return <div className="results">
        {!!locations.length && <ul className="results__list">
            {locations.map(location => {
            <li key={location.id} className="results__item" onClick={() => goToLocation(location.id)}>
                <h2>{location.title}</h2>
                <h3>{location.type}</h3>
                <img src={location.image}/>
                <h3>{location.city}</h3>
            </li>})}
            </ul>}
    </div>

}

export default Results