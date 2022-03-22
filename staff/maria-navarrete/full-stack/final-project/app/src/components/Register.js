import './Register.sass'
import { Input, Button, Logo, GoIcon } from '.'
import { registerUser } from '../logic'


export const Register = ({ onRegistered }) => {

    const register = async event => {
        try {
            const { target: { username: { value: username }, email: { value: email }, password: { value: password } } } = event

            await registerUser(username, email, password)
            onRegistered && onRegistered()
        } catch (error) {
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
                <Input type='text' name='username' placeholder='Usuario' required />
                <Input type='email' name='email' placeholder='Email' required />
                <Input type='password' name='password' placeholder='Contraseña' required />
            </fieldset>
            <Button type='submit'>
                <GoIcon />
            </Button>
        </form>
        <a href=''>Ya tengo una cuenta</a>
    </>
}
