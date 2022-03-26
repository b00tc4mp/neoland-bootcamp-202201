import './Profile.sass'
import { Link } from '../components'


export function Profile({ onUserData, onListLocations, onListFollows, onDeleteAccount }) {

    const goToUserData = event => {
        //event.preventDefault()
        onUserData && onUserData(event)
    }

    const goToListLocations = event => {
        //event.preventDefault()
        onListLocations && onListLocations(event)
    }
    const goToListFollows = event => {
        //event.preventDefault()
        onListFollows && onListFollows(event)
    }

    const goToDeleteAccount = event => {
        //event.preventDefault()
        onDeleteAccount && onDeleteAccount(event)
    }

    return <>
        <nav>
            <ul>
                <li><Link onClick={goToUserData}>Mis datos</Link></li>
                <li><Link onClick={goToListLocations}>Mis localizaciones</Link></li>    
                <li><Link onClick={goToListFollows}>Usuarios seguidos</Link></li>    
                <li><Link onClick={goToDeleteAccount}>Eliminar cuenta</Link></li>
            </ul>
        </nav>
    </>
}

