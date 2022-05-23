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

    const goToRegister = event => {
        event.preventDefault()
        onRegister()
    }

    return <div className="login">
        <form onSubmit={login}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>
            <a href="" onClick={goToRegister}>Register</a>
        </form>
    </div>
}

export default Login