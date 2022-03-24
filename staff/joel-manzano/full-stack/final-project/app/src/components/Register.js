import './Register.css'
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
            <Input type='text' name='name' placeholder='name' />
            <Input type='email' name='email' placeholder='email' />
            <Input type='password' name='password' placeholder='password' />
            <Button type='submit'>Register</Button>
            <a href="" onClick={goToLogin}>Login</a>
        </form>
    </div>

}

export default Register