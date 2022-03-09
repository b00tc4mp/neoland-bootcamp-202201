import './Favs.css'
import { useEffect, useState } from 'react'
import { retrieveFavVehicles, toggleFavVehicle } from '../logic'

function Favs({ token, onItem }) {
    const [vehicles, setVehicles] = useState([])
    const [view, setView] = useState()
    

    useEffect(() => {
        try {
            retrieveFavVehicles(token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const removeFav = vehicleId => {
        try {
            toggleFavVehicle(token, vehicleId)
                .then(() =>
                    retrieveFavVehicles(token)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                )
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToItem = id => {
        onItem(id)
    }

    return <div className="results">
        <div className='results__list-items'>
            {vehicles && (vehicles.length ? <ul className="favs__list">
                {vehicles.map(vehicle => <li key={vehicle.id} className="favs__item" onClick={() => goToItem(vehicle.id)}>
                    <h2>{vehicle.name}</h2>

                    <span className="favs__item-fav-button" onClick={event => {
                        event.stopPropagation()

                        removeFav(vehicle.id)
                    }}>♥️</span>

                    <img className='favs__item-fav-image' src={vehicle.image} />
                    <span>{vehicle.price} $</span>
                </li>)}
            </ul> : <p className='favs__empty'>No favs yet</p>)}

        </div>
    </div>
}

export default Favs