import './Login.sass'
import { authenticateUser } from '../logic'
import { Input } from './form-elements'
import { Logo } from './elements'


function Login({ onLogged, onRegister }) {

    const login = async event => {
        
        try {
            const { target: { email: { value: email }, password: { value: password } } } = event

            const token = await authenticateUser(email, password)
                sessionStorage.token = token
                onLogged && onLogged()
                
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault() 
        login(event)
    }

    const goToRegister = event => {
        event.preventDefault()
        onRegister && onRegister()
    }

    return <div className="login">
        <Logo className="logo-big"/>
        <form className="login__form" onSubmit={onSubmit}>
            <Input type="email" name="email" placeholder="email"/>
            <Input type="password" name="password" placeholder="password" />
            <button type="submit">Login</button>
            <a href="" onClick={goToRegister}>Register</a>
        </form>
    </div>
}

export default Login