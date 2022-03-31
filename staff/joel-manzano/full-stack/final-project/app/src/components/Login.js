import './Login.sass'
import { authenticateUser } from '../logic'
import { Button } from './buttons'
import { Input } from './form-elements'


function Login({ onLogged, onRegister }) {

    const goToRegister = event => {
        event.preventDefault()
        onRegister && onRegister()
    }

    const login = event => {

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLogged && onLogged()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    
    const onSubmit = event => {
        event.preventDefault()
        login(event)
    }

    return <div className='login'>
        <form onSubmit={onSubmit}>
            <h1>LOGIN</h1>
            <input className='profile__input login-input' type='email' name='email' placeholder='email' />
            <input className='profile__input login-input' type='password' name='password' placeholder='password' />
            <Button className='button login-buttons' type='submit'>Login</Button>
            <button className='button logout-button login-buttons' href='' onClick={goToRegister}>Register</button>
        </form>
    </div>
}

export default Login
