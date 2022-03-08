import './Login.css'
import { authenticateUser } from '../logic'

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
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
        <a className="login__register-link" href="" onClick={event => {
                event.preventDefault()

                onRegister()
            }}>Register</a>
        
    </form>
}

export default Login