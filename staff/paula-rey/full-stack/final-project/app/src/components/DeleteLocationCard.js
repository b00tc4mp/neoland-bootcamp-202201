import './DeleteLocationCard.sass'
import { Button, DeleteIcon } from '.'
import { deleteLocation } from '../logic'


export function DeleteLocationCard(locationId, onDeletedLocation) {

    const deleteLocationCard = event => {
        event.preventDefault()

        try{
            deleteLocation(sessionStorage.token, locationId)
                .then(() => onDeletedLocation())
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

     
    // const goToMyLocations = event => {
    //     event.preventDefault()
    //     onListLocations && onListLocations(event)
    // }

    return <>
        <form onSubmit={deleteLocationCard}>
            <Button /*onClick={goToMyLocations}*/><DeleteIcon/></Button>
        </form>
    </>
}


//falta inyectar esta card en el compo de deleteLocation y enrutarlo en la app
