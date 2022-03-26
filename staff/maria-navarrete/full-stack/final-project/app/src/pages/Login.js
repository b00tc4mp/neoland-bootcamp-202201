import './Login.sass'
import { Logo, Link, LoginForm } from '../components'



export const Login = ({ goToHome: _goToHome, goToRegister: _goToRegister }) => {

    const goToRegister = event => {
        _goToRegister && _goToRegister(event)
    }

    const goToHome = event => {
        _goToHome && _goToHome(event)
    }

    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <LoginForm onLogged={goToHome} />
        <Link href='' onClick={goToRegister}>No tengo una cuenta todavía</Link>
    </>
}