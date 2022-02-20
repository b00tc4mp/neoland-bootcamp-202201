import './Details.css'
import { useState, useEffect } from 'react'
import { retrieveVehicle, toggleFavVehicle, addVehicleToCart } from '../Logic'

function Details({ token, vehicleId, onBack }) {
    const [vehicle, setVehicle] = useState()
    const [fav, setFav] = useState(false)

    useEffect(() => {
        try {
            retrieveVehicle(token, vehicleId)
                .then(vehicle => {
                    setVehicle(vehicle)
                    setFav(vehicle.isFav)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    const onFavClick = event => {
        event.preventDefault()

        try {
            toggleFavVehicle(token, vehicleId)
                .then(() => setFav(!fav))
                .catch(error => alert(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    const addToCart = () => {
        try {
            addVehicleToCart(token, vehicleId)
                .then(() => alert('vehicle added to cart'))
                .catch(error => alert(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    if (vehicle)
        return <div className="detail">
            <h1>{vehicle.name}</h1>

            <span className="detail__fav" onClick={onFavClick}>{fav ? '❤️' : '🤍'}</span>

            <img className="detail__image" src={vehicle.image} />

            <span>{vehicle.price} $</span>

            <button className="detail__button-cart" onClick={addToCart}>🛒</button>

            <p>{vehicle.description}</p>

            <span>{vehicle.color}</span>
            <span>{vehicle.year}</span>
            <span>{vehicle.maker}</span>

            <a href={vehicle.url}>original store</a>

            <a href="" onClick={goBack}>back</a>
        </div>
    else return null
}

export default Details