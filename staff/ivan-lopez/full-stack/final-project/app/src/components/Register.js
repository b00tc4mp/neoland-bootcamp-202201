// import './Register.css'
import { registerUser } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'

function Register({ onLogin, onRegistered }) { // Si es un aprop pueden no pasarla

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin()
    }

    const register = event => {
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('Usuario registrado correctamente')
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

    return <div className='register'>
        <form onSubmit={onSubmit}>
            <h1>REGISTER</h1>
            <Input type='text' name='name' placeholder='name' />
            <Input type='email' name='email' placeholder='email' />
            <Input type='password' name='password' placeholder='password' />
            <Button type='submit'>Register</Button>
            <a href='' onClick={goToLogin}>Login</a>
        </form>
    </div>

}

export default Register

// Usamos nuestros compos y todo lo de js (lo que hay por encima del retunr)