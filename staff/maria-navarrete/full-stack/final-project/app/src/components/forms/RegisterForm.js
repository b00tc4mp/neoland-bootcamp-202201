import './RegisterForm.sass'
import { Input, Button, GoIcon } from '../../components'
import { registerUser } from '../../logic'


export const RegisterForm = ({ className = '', onRegistered }) => {

    const register = async event => {
        try {
            const { target: { username: { value: username }, email: { value: email }, password: { value: password } } } = event

            await registerUser(username, email, password)
            onRegistered && onRegistered()
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
        register(event)
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <fieldset>
                <legend>Registrarse</legend>
                <Input type='text' name='username' placeholder='Usuario' required />
                <Input type='email' name='email' placeholder='Email' required />
                <Input type='password' name='password' placeholder='Contraseña' required />
            </fieldset>
            <Button type='submit'><GoIcon /></Button>
        </form>
    </>
}
