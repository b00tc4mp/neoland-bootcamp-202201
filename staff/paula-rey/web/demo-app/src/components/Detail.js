import './Detail.css'
import { useState, useEffect } from 'react'
import { retrieveVehicle } from '../Logic'


function Detail({ vehicleId }) {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveVehicle(vehicleId)
                .then(({ vehicle }) => {
                    setVehicle(vehicle)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    return <div className="detail"> {vehicle && <>

        <h1>{vehicle.name}</h1>
        <img className="detail__image"src={vehicle.image} />

        <div className="detail__attributes-wrapper">
            <div className="detail__attributes"> 
                <p>Year: </p>
                <p> {vehicle.year}</p>
            </div>
            <div className="detail__attributes"> 
                <p>Color:</p>
                <p>{vehicle.color}</p>
            </div>
        </div >
        <div className="detail__attributes-wrapper">
            <div className="detail__attributes"> 
                <p>Maker: </p>
                <p>{vehicle.maker}</p>
            </div>
            <div className="detail__attributes"> 
                <p>Collection: </p>
                <p>{vehicle.collection}</p>
            </div>
        </div>

        <div className="detail__attributes-wrapper">
            <div className="detail__attributes"> 
                <p>Price: </p>
                <p>{vehicle.price}$</p>
            </div>
            <div className="detail__attributes"> 
                <p>Style: </p>
                <p>{vehicle.style}</p>
            </div>

        </div>
        
        <div className=""> 
            <p>Url: </p>
            <p>{vehicle.url}</p>
        </div>
        <div className=""> 
            <p>Description: </p>
            <p>{vehicle.description}</p>
        </div>
    </>}
    </div>
}

export default Detail