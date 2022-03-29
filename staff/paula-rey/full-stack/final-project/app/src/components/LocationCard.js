import './LocationCard.sass'
import { FavoriteButton } from '.'


export function LocationCard({ location = {}, onLocationCard, onToggled}) {
    return <>
        <div className="card">
            <FavoriteButton className="card__toggle-favorite" locationId={location.id} isFavorite={location.isFavorite} onToggled={onToggled}/>
            <h1>{location.title}</h1>
            <h2>{location.type}</h2>
            <img src={location.image} onClick={() => onLocationCard(location.id)}/>
            <p>{location.city}</p>
        </div>
    </>
}


