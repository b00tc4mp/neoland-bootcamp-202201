import './Register.sass'
import { RegisterForm, Logo, Link } from '../components'


export const Register = ({ goToLogin, onLogin }) => {


    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <RegisterForm onRegistered={goToLogin} />
        <Link onClick={onLogin}>Ya tengo una cuenta</Link>
    </>
}
