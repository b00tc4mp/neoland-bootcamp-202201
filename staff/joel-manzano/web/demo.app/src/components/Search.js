import './Search.css'
import Details from './Details'
import { searchVehicles } from '../logic'
import { useState } from 'react'

function Search() {
    const [vehicles, setVehicles] = useState([])
    const [view, setView] = useState('results')
    const [vehicleId, setVehicleId] = useState('')
    
    const showDetails = () => setView('details')
   
    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        try {
            searchVehicles(query)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query" />
            <button>Search</button>
        </form>

        {!!vehicles.length && view === 'results' && <ul className="search__results-list">
            
            {vehicles.map(vehicle => <li key={vehicle.id} onClick={event => {
                event.preventDefault();
                setVehicleId(vehicle.id);
                showDetails()
            }}>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.thumbnail} />
                <span>{vehicle.price} $</span>
            </li>)}
        </ul>}

        {view == 'details' && <Details vehicleId ={vehicleId} />}
    </div>
}

export default Search