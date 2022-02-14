import './Detail.css'
import { retrieveVehicle } from '../logic'
import { useEffect, useState } from 'react'

function Detail({ vehicleId, onBack }) {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveVehicle(vehicleId)
                .then(vehicle => setVehicle(vehicle))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    if (vehicle)
        return <div className="detail">
            <h1>{vehicle.name}</h1>

            <span> 0 </span>
            
            <img className="detail__image" src={vehicle.image} />
            
            <span>{vehicle.price} $</span>
            
            <p>{vehicle.description}</p>
            
            <span>{vehicle.color}</span>
            <span>{vehicle.year}</span>
            <span>{vehicle.maker}</span>
            
            <a href={vehicle.url}>original store</a>

            <a href=""onClick={goBack}>back</a>
        </div>
    else return null
}

export default Detail