import './Login.sass'
import { authenticateUser } from '../logic'
import logo from '../assets/racketMatch.png'

function Login({ onLoggedIn, onRegister }) {
    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(onLoggedIn)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form className='login' onSubmit={login}>
        <div className='login__container'>
            <img className='login__logo' src={logo} alt='Logo racketMatch' width='' height=''></img>
            <div className='login__wrapper'>
                <input className='login__input' type="email" name="email" placeholder="Email" />
                <input className='login__input' type="password" name="password" placeholder="Password" />
                <button className='login__button'>Login</button>
            </div>
            <a className="login__register-link" href="" onClick={event => {
                event.preventDefault()

                onRegister()
            }}>Register</a>
        </div>
    </form>
}

export default Login