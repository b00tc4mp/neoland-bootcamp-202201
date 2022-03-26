import './Profile.sass'
import { ProfileForm, Link, Button } from '../components'

export const Profile = ({ }) => {

    return <div className='profile__container'>
        <ProfileForm />
        <Link href="" className='profile__link' >Cambiar Contraseña</Link>
        <div className='profile__aaa'>
            <Button className='profile__button' type='button'>Cerrar sessión</Button>
            <Link href="" className='profile__link'>Borrar Cuenta</Link>
        </div>
    </div>
}