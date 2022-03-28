import './Profile.sass'
import { ProfileForm, Link, Button } from '../components'

export const Profile = ({ onUpdatePassword, onLogout }) => {

    const goToUpdatePassword = event => {
        onUpdatePassword()
    }


  const logout = () => {
    delete sessionStorage.token
    onLogout()
  }

    return <div className='profile__container'>
        <ProfileForm />
        <Link onClick={goToUpdatePassword} href="" className='profile__link' >Cambiar Contraseña</Link>
        <div className='profile__aaa'>
            <Button onClick={logout} className='profile__button' type='button'>Cerrar sessión</Button>
            <Link href="" className='profile__link'>Borrar Cuenta</Link>
        </div>
    </div>
}