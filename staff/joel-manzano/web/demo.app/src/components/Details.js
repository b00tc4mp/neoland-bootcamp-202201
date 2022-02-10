import './Details.css'
import { useEffect, useState } from 'react'
import { retrieveVehicle } from '../logic'
function Details({ vehicleId }) {

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
    
    return <div className="details"> {vehicle && <>

        <h1>{vehicle.name}</h1>
        <img className="details__image"src={vehicle.image}/>
       
        <div className="details__attributes-wrapper">
            <div className="details__attributes"> 
                <p className="details__attributes__title">Year:&nbsp;</p>
                <p> {vehicle.year}</p>
            </div>
            <div className="details__attributes"> 
                <p className="details__attributes__title">Color:&nbsp;</p>
                <p>{vehicle.color}</p>
            </div>
        </div >
        <div className="details__attributes-wrapper">
            <div className="details__attributes"> 
                <p className="details__attributes__title">Maker:&nbsp;</p>
                <p>{vehicle.maker}</p>
            </div>
            <div className="details__attributes"> 
                <p className="details__attributes__title">Collection:&nbsp;</p>
                <p>{vehicle.collection}</p>
            </div>
        </div>

        <div className="details__attributes-wrapper">
            <div className="details__attributes"> 
                <p className="details__attributes__title">Price:&nbsp;</p>
                <p>{vehicle.price}$</p>
            </div>
            <div className="details__attributes"> 
                <p className="details__attributes__title">Style:&nbsp;</p>
                <p>{vehicle.style}</p>
            </div>

        </div>
        
        <div className=""> 
            <p className="details__attributes__title">Url:</p>
            <p>{vehicle.url}</p>
        </div>
        <div className=""> 
            <p className="details__attributes__title">Description:</p>
            <p>{vehicle.description}</p>
        </div>
    </>}
    </div>
}

export default Details