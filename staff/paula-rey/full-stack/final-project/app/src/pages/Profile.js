import './Profile.sass'
import { Link } from '../components'


export function Profile({ onUserData, onListLocations, onAddLocation, onDeleteAccount, onLogOut }) {

    const logOut = event => {
        event.preventDefault()
        delete sessionStorage.token
        onLogOut()
    }

    return <>
        <div className="profile" >
            <ul className="profile__list">
                <li><Link onClick={onUserData}>Mis datos</Link></li>
                <li><Link onClick={onAddLocation}>Crear localización</Link></li>
                <li><Link onClick={onListLocations}>Mis localizaciones</Link></li> 
                <li><Link onClick={onDeleteAccount}>Eliminar cuenta</Link></li>
                <li><Link onClick={logOut}>Cerrar sesión</Link></li>
            </ul>
        </div>
    </>
}

