import './Login.sass'
import { authenticateUser } from '../logic'
import { Input } from './form-elements'
import { Button, Logo } from './elements'

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

    return <form className='login' onSubmit={onSubmit}>
        <div className='login__container'>
            <Logo />
            <div className='login__wrapper'>
                <Input type='email' name='email' placeholder='Email' required={true}/>
                <Input type='password' name='password' placeholder='Contraseña' required={true} />
                <Button type='submit' innertext='Login' />
            </div>
            <a className="login__register-link" href="" onClick={goToRegister}>Register</a>
        </div>
    </form>
}

export default Login