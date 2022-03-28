import './LocationCard.sass'
import { FavoriteButton, Link, GoIcon } from '.'


export function LocationCard({ location = {}, onLocationCard: _onLocationCard }) {

    const onLocationCard = locationId => {
        _onLocationCard && _onLocationCard(locationId)
    }

    return <>
        <div className='location-card'>
            <FavoriteButton location={location} />
            <h1>{location.title}</h1>
            <h2>{location.type}</h2>
            <img src={location.image} />
            <p>{location.city}</p>
            <Link onClick={() => onLocationCard(location.id)} ><GoIcon /></Link>
        </div>
    </>
}


