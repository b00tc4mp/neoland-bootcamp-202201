import './Login.css'
import { authenticateUser } from '../logic'

function Login({ onLoggedIn }) {
    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            debugger
            authenticateUser(email, password)
                .then(onLoggedIn)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={login}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
    </form>
}

export default Login