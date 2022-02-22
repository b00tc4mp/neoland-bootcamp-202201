import './Cart.css'
import { useEffect, useState } from 'react'
import { retrieveVehiclesFromCart, toggleFavVehicle, addVehicleToCart, removeVehicleFromCart } from '../logic'

function Cart({ token, onItem }) {
    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        try {
            retrieveVehiclesFromCart(token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const toggleFav = vehicleId => {
        try {
            toggleFavVehicle(token, vehicleId)
                .then(() =>
                    retrieveVehiclesFromCart(token)
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

    const addToCart = vehicleId => {
        try {
            addVehicleToCart(token, vehicleId)
                .then(() =>
                    retrieveVehiclesFromCart(token)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                )
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const removeFromCart = vehicleId => {
        try {
            removeVehicleFromCart(token, vehicleId)
                .then(() =>
                    retrieveVehiclesFromCart(token)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                )
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="cart">
        {vehicles && (vehicles.length ? <div>
            <ul className="cart__list">
                {vehicles.map(vehicle => <li key={vehicle.id} className="cart__item" onClick={() => goToItem(vehicle.id)}>
                    <h2>{vehicle.name}</h2>

                    <span className="cart__item-fav-button" onClick={event => {
                        event.stopPropagation()

                        toggleFav(vehicle.id)
                    }}>{vehicle.isFav ? '❤️' : '🤍'}</span>

                    <img className="cart__item-image" src={vehicle.image} />
                    <span><button onClick={event => {
                        event.stopPropagation()

                        addToCart(vehicle.id)
                    }}>+</button><button onClick={event => {
                        event.stopPropagation()

                        removeFromCart(vehicle.id)
                    }}>-</button> {vehicle.qty} x {vehicle.price} $ = {vehicle.total} $</span>
                </li>)}
            </ul>

            <div className="cart__total">
                <span>total {vehicles.total} $</span>
            </div>
        </div> : <p className="cart__empty">No cart yet</p>)}
    </div>
}

export default Cart