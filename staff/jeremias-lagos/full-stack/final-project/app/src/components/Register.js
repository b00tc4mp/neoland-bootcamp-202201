import './Register.sass'
import { registerUser } from '../logic'
import { Button } from '../components'
import { Input } from './form-elements'

function Register({ onLogin, onRegistered }) { 
    // si es una prop pueden NO pasarla
    const register = event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('successfully registered user')
                    onRegistered && onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToLogin = (event) => {
        event.preventDefault()
        onLogin && onLogin()
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    return <div className='register'>
        <form onSubmit={onSubmit}>
            <Input type="text" name="name" placeholder="name" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <Button type='submit'>Register</Button>
            <a href='' onClick={goToLogin}>Login</a>
        </form>
    </div>

}

export default Register
