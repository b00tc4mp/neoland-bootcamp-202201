import './Login.sass'
import { Logo, Link, LoginForm } from '../components'



export const Login = ({ goToHome, onRegister }) => {


    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <LoginForm onLogged={goToHome} />
        <Link onClick={onRegister}>No tengo una cuenta todavía</Link>
    </>
}