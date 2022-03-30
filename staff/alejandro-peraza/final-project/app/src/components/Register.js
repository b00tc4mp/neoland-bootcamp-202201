import './Register.sass'
import { registerUser } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'

function Register({ onRegistered, onLogin }) {

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(onRegistered)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToLogin = event => {
        event.preventDefault()
        onLogin()
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    return <div className='register'>
        {<form className='register__form' onSubmit={register}>
            <h1 className='register_text'>REGISTER</h1>

            <Input type='text' name='name' placeholder='name' />
            <Input type='email' name='email' placeholder='email' />
            <Input type='password' name='password' placeholder='password' />
            <div className='botones'>
                <Button href="" onClick={goToLogin}>Login</Button>
                <Button type="submit" onSubmit={onSubmit}>Register</Button>
            </div>
        </form>
        }
    </div >

}

export default Register