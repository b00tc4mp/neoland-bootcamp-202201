import './UpdatePassword.sass'
import { UserIcon, UpdatePasswordForm } from '../components'


export const UpdatePassword = ({ goToProfile }) => {


    return <>
        <div>
            <UserIcon />
            <h2>Actualizar contraseña</h2>
            <UpdatePasswordForm onUpdated={goToProfile} />
        </div>
    </>
}