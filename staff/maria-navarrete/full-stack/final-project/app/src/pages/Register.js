import './Register.sass'
import { RegisterForm, Logo, Link } from '../components'


export const Register = ({ goToLogin: _goToLogin }) => {

    const goToLogin = event => { _goToLogin && _goToLogin(event) }

    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <RegisterForm onRegistered={goToLogin} />
        <Link href='' onClick={goToLogin}>Ya tengo una cuenta</Link>
    </>
}
