import './Details.css'
import { retrieveVehicle } from '../logic'
import { useState } from 'react' 
import Search from './Search'

function Details({ vehicleId }) {
    const [vehicle, setVehicle] = useState()
    const [view, setView] = useState()

    const showSearch = () => setView('search')

    useEffect(() => {
        try{   
            retrieveVehicle(VehicleId)
                .then(vehicle => setVehicle(vehicle))
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    return <div className="details">
        {vehicle && view !== 'search' &&
            (<>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.image} className='details__image'></img>
                <p>{vehicle.description}</p>
                <p>{vehicle.price}</p>
                <a href={vehicle.url}>Visit Site</a>
                <p>Maker: {vehicle.maker}</p>
                <p>Year: {vehicle.year}</p>
                <p>Color: {vehicle.color}</p>
                <p>Collection: {vehicle.collection}</p>
                <p>Style: {vehicle.style}</p>
                <button onClicl={e => {
                    e.preventDefault()
                    showSearch();
                }}>Back</button>
                {view === 'search' && <Search />}
            </>
            )}

        
    </div>
}

export default Details