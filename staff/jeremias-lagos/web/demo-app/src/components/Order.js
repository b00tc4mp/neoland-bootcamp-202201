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

  