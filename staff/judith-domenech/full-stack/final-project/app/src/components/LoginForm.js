import './LoginForm.sass'
import { authenticateUser } from '../logic'
import { Button, Link, Input } from '.'

export function Login({ onLoggedIn, onRegister }) {

    const login = async event => {
        try {
            const { target: { email: { value: email }, password: { value: password } } } = event
            
            const token = await authenticateUser(email, password)
            sessionStorage.token = token
            onLoggedIn && onLoggedIn(event)
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
        onRegister && onRegister(event)
    }

    return <form className='login' onSubmit={onSubmit}>
        <div className='login__container'>
            <div className='login__wrapper'>
                <Input type='email' name='email' placeholder='Email' required={true}/>
                <Input type='password' name='password' placeholder='Contraseña' required={true} />
                <Button type='submit'> Login </Button>
            </div>
            <Link href="" onClick={goToRegister}> Registrarse</Link> 
        </div>
    </form>
}

