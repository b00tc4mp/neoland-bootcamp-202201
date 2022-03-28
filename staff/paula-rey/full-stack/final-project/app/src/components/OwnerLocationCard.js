import './OwnerLocationCard.sass'
import { EditIcon, GoIcon, DeleteIcon, Link, Button } from '.'


export function OwnerLocationCard({ location = {}, onUpdateLocation: _onUpdateLocation, onOwnerLocationCard: _onOwnerLocationCard }) {

    const onUpdateLocation = locationId => {
        _onUpdateLocation(locationId)
    }

    const onOwnerLocationCard = locationId => {
        _onOwnerLocationCard(locationId)
    }
    

    return <>
        <div className='user-location-card'>
            <h1>{location.title}</h1>
            <h2>{location.type}</h2>
            <img src={location.image} />
            <h2>{location.city}</h2>
            <Link onClick={() => onOwnerLocationCard(location.id)} ><GoIcon/></Link>
            <Link onClick={() => onUpdateLocation(location.id)}><EditIcon/></Link>
            <Button>
                <DeleteIcon />
            </Button>
        </div>
    </>
}



