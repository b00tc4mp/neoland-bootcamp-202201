import './RegisterForm.sass'
import { registerUser } from '../logic'
import { Button, Link, Input } from '.'

export function Register({ onLogin, onRegister, onRegistered }) {


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

    return <form className='register' onSubmit={onSubmit}>
        <div className='register__container'>
            <div className="register__wrapper">
                <Input type='text' name='name' placeholder='Name' required={true}/>
                <Input type='email' name='email' placeholder='Email' required={true}/>
                <Input type='password' name='password' placeholder='Password' required={true}/>
                <Button type='submit'> Register</Button>
            </div>

            <Link href="" onClick={goToLogin}> Login </Link> 
        </div>

    </form>
}