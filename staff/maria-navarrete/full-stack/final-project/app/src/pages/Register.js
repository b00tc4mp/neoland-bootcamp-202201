import './Register.sass'
import { RegisterForm, Logo, Link } from '../components'


export const Register = ({ goToLogin: _goToLogin, onLogin: _onLogin }) => {

    const goToLogin = event => {
        _goToLogin && _goToLogin(event)
    }

    const onLogin = event => {
        _onLogin && _onLogin(event)
    }


    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <RegisterForm onRegistered={goToLogin} />
        <Link onClick={onLogin}>Ya tengo una cuenta</Link>
    </>
}
