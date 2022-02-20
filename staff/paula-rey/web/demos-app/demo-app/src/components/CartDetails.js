//junto con Cart2
import { useEffect, useState } from 'react'
import { retrieveVehiclesFromCart, toggleFavVehicle, addVehicleToCart, removeVehicleFromCart } from '../Logic'
import { placeVehiclesOrder } from '../Logic'


function CartDetails ({ token, onItem, onOrderDetails }) {

    const [vehicles, setVehicles] = useState([])


    useEffect(() => {
        try {
            retrieveVehiclesFromCart(token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


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

    const toggleFav = vehicleId => {
        try {
            toggleFavVehicle(token, vehicleId)
                .then(() =>
                    retrieveVehiclesFromCart(token)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                )
                .catch(error => alert(error.message))
        }
        catch (error) {
            alert(error.message)
        }
    }

    const goToItem = id => {
        onItem(id)
    }
    
    const placeOrder = event => {
        event.preventDefault()
        try {
            placeVehiclesOrder(token)
                .then(() => alert('order placed'))
                .catch(error => alert(error.message))
        } catch ({ message }) {
            alert(message)
        }

        //onOrderDetails()
    }


    return <>
        {vehicles.length ? <div>
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
                <button onClick={placeOrder}>Place order</button>
            </div>
        </div> : <p className="cart__empty">No cart yet</p>}
    </>

}

export default CartDetails