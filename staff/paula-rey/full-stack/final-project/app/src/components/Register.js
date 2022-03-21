import './Register.sass'
import { registerUser } from '../logic'
import { Input } from './form-elements'

function Register({ onLogin, onRegistered }) {
    
    const register = async event => {

        try {
            const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

            await registerUser(name, email, password)
            onRegistered && onRegistered()

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin()
    }

    return <div className="register">
        <form className="register__form" onSubmit={onSubmit}>
            <Input type="text" name="name" placeholder="name" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <button type="submit">Register</button>
            <a href="" onClick={goToLogin}>Login</a>
        </form>
    </div>
}

export default Register