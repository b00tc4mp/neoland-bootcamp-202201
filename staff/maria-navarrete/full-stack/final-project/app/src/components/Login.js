import './Login.sass'
import { Input } from './form-elements'
import { Button, Logo } from './elements'
import { authenticateUser } from '../logic'


const Login = ({ onLogged }) => {

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
                <Input type='email' name='email' placeholder='Email' />
                <Input type='password' name='password' placeholder='Contraseña' />
            </fieldset>
            <Button type='submit' innerText='>' />
        </form>
        <a href=''>No tengo una cuenta todavía</a>
    </>
}


export default Login