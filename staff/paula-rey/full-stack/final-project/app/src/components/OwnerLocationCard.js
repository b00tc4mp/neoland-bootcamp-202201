import './OwnerLocationCard.sass'
import { EditIcon, GoIcon, Link, DeleteLocationButton } from '.'


export function OwnerLocationCard({ location = {}, onUpdateLocation, onDeletedLocation, onLocationDetails }) {


    return <>
        <div className='user-card'>
            <h1>{location.title}</h1>
            <h2>{location.type}</h2>
            <img src={location.image} onClick={() => onLocationDetails(location.id) } />
            <h2>{location.city}</h2>
            <Link onClick={() => onUpdateLocation(location.id)}><EditIcon/></Link>
            <DeleteLocationButton locationId={location.id} onDeletedLocation={onDeletedLocation}/>
    
        </div>
    </>
}



