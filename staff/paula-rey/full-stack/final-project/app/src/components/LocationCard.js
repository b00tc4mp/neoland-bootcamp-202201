import './LocationCard.sass'
import { FavoriteButton, Link, GoIcon } from '.'


export function LocationCard({ location = {}, onLocationCard, onToggled}) {
    return <>
        <div className="card">
            <FavoriteButton className="card__toggle-favorite" locationId={location.id} isFavorite={location.isFavorite} onToggled={onToggled}/>
            <h1>{location.title}</h1>
            <h2>{location.type}</h2>
            <img src={location.image} />
            <p>{location.city}</p>
            <Link onClick={() => onLocationCard(location.id)} ><GoIcon /></Link>
        </div>
    </>
}


