import './Search.css'
import Details from './Details'
import { searchVehicles } from '../logic'
import { useState } from 'react'

function Search() {
    const [vehicles, setVehicles] = useState([])
    const [view, setView] = useState("results")
    const [vehicle, setVehicle] = useState()

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        try {
            searchVehicles(query)
                .then(vehicles => setVehicles(vehicles))
        } catch ({message}) {
            alert(message)
        }
    }

    const showDetails = () => setView('details')

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query" id="" />
            <button>Search</button>
        </form>
        {!!vehicles.length && view === "results" && (
        <ul className="search__results-list">
            {vehicles.map(vehicle => <li key={vehicle.id}className="search__list-item" onClick={(event)=>{
                event.preventDefault()
                setVehicle(vehicle)
                showDetails()
            }}>

                <h2 className="details__title">{vehicle.name}</h2>
                <img src={vehicle.thumbnail} />
                <span>{vehicle.price}$</span>
            </li>)}
        </ul>)}
        {view === 'details' && <Details vehicleId ={vehicle.id} />}
    </div>
}

export default Search