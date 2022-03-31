import './Login.sass'
import { authenticateUser } from '../logic'
import { Button } from "../components"
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

    return(
    <div className='container'>
        <form className='login' onSubmit={onSubmit}>
            <h1 className='login__title'>LOGIN</h1>
            <Input className="login__input" type='email' name='email' placeholder='email' />
            <Input className="login__input" type='password' name='password' placeholder='password' />
            <Button className='login__button' type="submit">Login</Button>
            <Button className='login__register-button' href='' onClick={goToRegister}>Register</Button>
        </form>
    </div>
    )
}

export default Login