import './Login.sass'
import { Logo, Link, LoginForm } from '../components'



export const Login = ({ goToHome: _goToHome, onRegister: _onRegister }) => {

    const onRegister = event => {
        _onRegister && _onRegister(event)
    }

    const goToHome = event => {
        _goToHome && _goToHome(event)
    }

    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <LoginForm onLogged={goToHome} />
        <Link onClick={onRegister}>No tengo una cuenta todavía</Link>
    </>
}