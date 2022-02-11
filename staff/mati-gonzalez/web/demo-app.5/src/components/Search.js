import './Search.css'
import Detail from './Detail'
import { searchVehicles } from '../logic'
import { useState } from 'react'

function Search() {
    const [vehicles, setVehicles] = useState([])

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

        {!!vehicles.length && <ul className="search__results-list">
            {vehicles.map(vehicle => <li>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.thumbnail} />
                <span>{vehicle.price} $</span>
            </li>)}
        </ul>}

        <Detail />
    </div>
}

export default Search