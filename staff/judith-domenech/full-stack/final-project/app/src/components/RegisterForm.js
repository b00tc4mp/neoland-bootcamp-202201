import './RegisterForm.sass'
import { registerUser } from '../logic'
import { Button, Link, Input } from '.'

export function RegisterForm({ onLogin, onRegister, onRegistered }) {


    const register = async event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            await registerUser(name, email, password)
            onRegistered && onRegistered(event)
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
        onLogin && onLogin(event)
    }

    return <form className='register__wrapper' onSubmit={onSubmit}>
        <Input type='text' name='name' placeholder='Name' required={true} />
        <Input type='email' name='email' placeholder='Email' required={true} />
        <Input type='password' name='password' placeholder='Password' required={true} />
        <Button className='register__button' type='submit'> Register</Button>
        <Link href="" onClick={goToLogin}> Login </Link>

    </form>
}