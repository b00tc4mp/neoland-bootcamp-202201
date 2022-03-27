import './UpdatePassword.sass'
import { UserIcon, UpdatePasswordForm } from '../components'


export const UpdatePassword = ({ goToProfile: _goToProfile }) => {

    const goToProfile = event => {
        _goToProfile && _goToProfile(event)
    }


    return <>
        <div>
            <UserIcon />
            <h2>Actualizar contraseña</h2>
            <UpdatePasswordForm onUpdated={goToProfile} />
        </div>
    </>
}