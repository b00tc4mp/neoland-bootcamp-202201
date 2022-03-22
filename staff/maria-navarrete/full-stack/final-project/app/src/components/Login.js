import './Login.sass'
import { Input, Button, Logo, GoIcon } from '.'
import { authenticateUser } from '../logic'


export const Login = ({ onLogged }) => {

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

    return <>
        <Logo type='main' alt='bHoomanLogo' className='logo-principal' />
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Ingresar</legend>
                <Input type='email' name='email' placeholder='Email' required />
                <Input type='password' name='password' placeholder='Contraseña' required />
            </fieldset>
            <Button type='submit'>
                <GoIcon />
            </Button>
        </form>
        <a href=''>No tengo una cuenta todavía</a>
    </>
}