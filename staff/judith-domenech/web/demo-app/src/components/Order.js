import './Order.css'
import { useEffect, useState } from 'react'
import { retrieveVehiclesOrder, retrieveVehiclesFromOrder } from '../logic'


function Order({ token, orderId, onItem }) {
    const [vehicles, setVehicles] = useState()
    const [order, setOrder] = useState()

    useEffect(() => {
        try {
            retrieveVehiclesOrder(token, orderId)
            .then(order => {
                setOrder(order)
                return retrieveVehiclesFromOrder(token, orderId)
            })
            .then(vehicles => setVehicles(vehicles))
            .catch(error => {throw error})
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    const goToItem = id => {
        onItem(id)
    }


    return <div className="order">
        {vehicles && (vehicles.length ? <div>
            <h1 className="order__title">{order.id}</h1>
            <p>Date: {order.date}</p>
            <ul className="order__list">
                {vehicles.map(vehicle => <li key={vehicle.id} className="order__item" onClick={() => goToItem(vehicle.id)}>
                    <h2>{vehicle.name}</h2>
                    <img className="order__item-image" src={vehicle.image}></img>
                    <span className="order__item-total"> {vehicle.qty} x {vehicle.price} $ = {vehicle.total} $</span>
                </li>)}
            </ul>
            <div className="order__total">
                <span>Total {vehicles.total} $</span>
            </div>

        </div> : <p className="order__empty">No order yet</p>)}
    </div>
}

export default Order