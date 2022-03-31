import './Register.sass'
import { registerUser } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'

function Register({ onLogin, onRegistered }) { 

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin()
    }

    const register = event => {
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('¡Usuario registrado correctamente!')
                    onRegistered && onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    return( 
    <div className='container'>
        <form className='register' onSubmit={onSubmit}>
            <h1 className='register__title'>REGISTER</h1>
            <Input className='register__input' type='text' name='name' placeholder='name' />
            <Input className='register__input' type='email' name='email' placeholder='email' />
            <Input className='register__input' type='password' name='password' placeholder='password' />
            <Button className='register__button' type='submit'>Register</Button>
            <Button className='register__login-button' href='' onClick={goToLogin}>Login</Button>
        </form>
    </div>
    )
}

export default Register

// Usamos nuestros compos y todo lo de js (lo que hay por encima del retunr)