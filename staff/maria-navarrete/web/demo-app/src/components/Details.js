import './Details.css'
import { retrieveVehicle, toggleFavVehicle, addVehicleToCart } from '../logic'
import { useState, useEffect } from 'react'


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
        } catch ({ message }) {
            alert(message)
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
        } catch ({ message }) {
            alert(message)
        }
    }

    const addToCart = () => {
        try {
            addVehicleToCart(token, vehicleId)
                .then(() => alert("vehicle added to cart"))
                .catch(error => alert(error.message))
        }
        catch ({ message }) {
            alert(message)
        }
    }

    if (vehicle)
        return <div className="details">
            <h2>{vehicle.name}</h2>
            <span className="detail__fav" onClick={onFavClick}>{fav ? '❤️' : '🖤'}</span>
            <img className="details__image" src={vehicle.image}></img>
            <span>{vehicle.price}$</span>
            <button onClick={addToCart}>Add to cart</button>
            <p>{vehicle.description}</p>
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