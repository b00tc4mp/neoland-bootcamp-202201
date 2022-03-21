import './Register.sass'
import { Input } from './form-elements'
import { Button, Logo } from './elements'
import { registerUser } from '../logic'


const Register = ({ onRegistered }) => {

    const register = async event => {
        try {
            const { target: { username: { value: username }, email: { value: email }, password: { value: password } } } = event

            await registerUser(username, email, password)
            onRegistered && onRegistered()
        }
        catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Registrarse</legend>
                <Input type='text' name='username' placeholder='Usuario' />
                <Input type='email' name='email' placeholder='Email' />
                <Input type='password' name='password' placeholder='Contraseña' />
            </fieldset>
            <Button type='submit' innerText='>' />
        </form>
        <a href=''>Ya tengo una cuenta</a>
    </>
}


export default Register
