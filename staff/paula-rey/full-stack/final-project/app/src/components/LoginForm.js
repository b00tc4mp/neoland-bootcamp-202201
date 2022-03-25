import './LoginForm.sass'
import { authenticateUser } from '../logic'
import { Input, Button, Link } from '.'


export function LoginForm({ onLoggedIn, onRegister }) {

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
        // event.preventDefault()
        onRegister && onRegister(event)
    }

    return <form className="login__form" onSubmit={onSubmit}>
            <Input type="email" name="email" placeholder="email" required={true}/>
            <Input type="password" name="password" placeholder="password" required={true}/>
            <Button type="submit">Login</Button>
            <Link href="" onClick={goToRegister}>Register</Link>
        </form>
    }