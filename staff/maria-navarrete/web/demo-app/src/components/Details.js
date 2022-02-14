import './Details.css'
import { retrieveVehicle } from '../logic'
import { useState, useEffect } from 'react'


function Details({ vehicleId, onBack }) {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveVehicle(vehicleId)
                .then(vehicle => setVehicle(vehicle))
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    if (vehicle)
        return <div className="details">
            <h2>{vehicle.name}</h2>
            <span>🖤</span>
            <img src={vehicle.image} className="details__image"></img>
            <p>{vehicle.description}</p>
            <p>{vehicle.price}$</p>
            <a href={vehicle.url}>Visit site</a>
            <p>Maker: {vehicle.maker}</p>
            <p>Year: {vehicle.year}</p>
            <p>Color: {vehicle.color}</p>
            <p>Collection: {vehicle.collection}</p>
            <p>Style: {vehicle.style}</p>
            <a href="" onClick={goBack}>Back</a>
        </div>
    else return null
}

export default Details