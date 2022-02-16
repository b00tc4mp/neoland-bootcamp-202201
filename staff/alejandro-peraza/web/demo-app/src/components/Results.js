import './Results.css'
import { useEffect, useState } from 'react'
import { searchVehicles } from '../logic'

function Results({ query, onItem }) {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        try {
            searchVehicles(query)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const goToItem = id => {
        onItem(id)
    }

    return <div className="results">
        {!!vehicles.length && <ul className="results__list">
            {vehicles.map(vehicle => <li key={vehicle.id} className="results__item" onClick={() => goToItem(vehicle.id)}>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.thumbnail} />
                <span>{vehicle.price} $</span>
            </li>)}
        </ul>}
    </div>
}

export default Results