import './RegisterForm.sass'
import { registerUser } from '../logic'
import { Input, Button, Link} from '.'

export function RegisterForm({ onLogin, onRegistered }) {
    
    const register = async event => {

        try {
            const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

            await registerUser(name, email, password)
            onRegistered()

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    const goToLogin = event => {
        // event.preventDefault()
        onLogin && onLogin(event)
    }

    return <form className="register__form" onSubmit={onSubmit}>
            <Input type="text" name="name" placeholder="name" required={true} />
            <Input type="email" name="email" placeholder="email" required={true}/>
            <Input type="password" name="password" placeholder="password" required={true} />
            <Button type="submit">Register</Button>
            <Link href="" onClick={goToLogin}>Login</Link>
        </form>
}

