import './Register.sass'
import { registerUser } from '../logic'
import { Input} from './form-elements'
import { Button } from '../components'

function Register({ onRegistered, onLogin }) {

    const register = event => {
        
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('User registered ;)')
                    onRegistered && onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin()
    }
    
    const onSubmit = event => {
        event.preventDefault()
            register(event)
    }

    return <div className='register'>
        <form onSubmit={onSubmit}>
            <h1>REGISTER</h1>
            <Input className='profile__input login-input' type='text' name='name' placeholder='name' />
            <Input className='profile__input login-input' type='email' name='email' placeholder='email' />
            <Input className='profile__input login-input' type='password' name='password' placeholder='password' />
            <Button className='button login-buttons' type='submit'>Register</Button>
            <Button className='button logout-button login-buttons' href="" onClick={goToLogin}>Login</Button>
        </form>
    </div>

}

export default Register