import './Results.css'
import { useEffect, useState } from 'react'
import { searchVehicles, toggleFavVehicle, addVehicleToCart } from '../logic'

function Results({ token, query, onItem }) {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        try {
            searchVehicles(token, query)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const goToItem = id => {
        onItem(id)
    }

    const toggleFav = vehicleId => {
        try {
            toggleFavVehicle(token, vehicleId)
                .then(() =>
                    searchVehicles(token, query)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                )
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const addToCart = vehicleId => {
        try {
            addVehicleToCart(token, vehicleId)
                .then(() => alert('Vehicle added to cart'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="results">
        {!!vehicles.length && <ul className="results__list">
            {vehicles.map(vehicle => <li key={vehicle.id} className="results__item" onClick={() => goToItem(vehicle.id)}>
                <h2>{vehicle.name}</h2>

                <div>
                    <span className="results__item-fav-button" onClick={event => {
                        event.stopPropagation()

                        toggleFav(vehicle.id)
                    }}>{vehicle.isFav ? '🖤' : '🤍'}</span>
                </div>

                <img src={vehicle.thumbnail} />

                <span>$ {vehicle.price}</span>

                <div className="results__item-add">
                    <button onClick={event => {
                        event.stopPropagation()

                        addToCart(vehicle.id)
                    }}>➡🛒</button>
                </div>
            </li>)}
        </ul>}
    </div>
}

export default Results