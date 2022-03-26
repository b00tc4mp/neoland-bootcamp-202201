import './Login.sass'
import { Logo, LoginForm } from '../components'

export const Login = ({ onRegister, onLoggedIn }) => {

    const goToRegister = event => {
        onRegister && onRegister(event)
    }

    const goToHome = event => {
        onLoggedIn && onLoggedIn(event)
    }

    return <div className='login'>
        <div className='login__container'>
                <Logo />
                <LoginForm onRegister={goToRegister} onLoggedIn={goToHome} />
        </div>
    </div>
}