import './Order.css'
import { retrieveOrder, retrieveVehiclesFromOrder } from '../logic'
import { useEffect, useState } from 'react'

function Order({ token, orderId, onItem }) {
    const [vehicles, setVehicles] = useState()
    const [order, setOrder] = useState()

    useEffect(() => {
        try {
            retrieveOrder(token, orderId)
                .then(order => {
                    setOrder(order)
                    retrieveVehiclesFromOrder(token, orderId)
                        .then(vehicles => setVehicles(vehicles))
                        .catch(error => alert(error.message))
                })
                .catch(error => alert(error.message))
        } catch ({ message }) {
            alert(message)
        }
    },[])

    const goToItem = id => {
        onItem(id)
    }

    return <div className="order">
        {vehicles && (vehicles.length? <div>
        <h1 className="order__title">ID: {order.id}</h1>
        <p>Date: {order.date}</p>
        <ul className="order__list">
            {vehicles.map(vehicle => <li key={vehicle.id} className="order__item" onClick={() => goToItem(vehicle.id)}>
                <h2>{vehicle.name}</h2>
                <img className="order__item-image" src={vehicle.image} />
                <span className="order__item-total"> {vehicle.qty} x {vehicle.price} $ = {vehicle.total} $</span>
            </li>)}
        </ul>
        <div className="order__total">
            <span>total {vehicles.total} $</span>
        </div>
    </div> : <p className="order__empty">Empty Order</p>)}
    </div>
}

export default Order