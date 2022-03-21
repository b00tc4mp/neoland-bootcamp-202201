import './Login.css'
import { authenticateUser } from '../logic'

function Login({ onLogged, onRegister }) {

    const goToRegister = event => {
        event.preventDefault()
        if(onRegister) onRegister()
    }

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    if(onLogged) onLogged()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <div className='login'>
        <form onSubmit={login}>
            <h1>LOGIN</h1>
            <input type='email' name='email' placeholder='email' />
            <input type='password' name='password' placeholder='password' />
            <button type='submit'>Login</button>
            <a onClick={goToRegister}>goToRegister</a>
        </form>
    </div>
}

export default Login
