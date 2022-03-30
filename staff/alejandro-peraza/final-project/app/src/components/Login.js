import './Login.sass'
import { authenticateUser } from '../logic'
import { Button } from "../components"
import { Input } from './form-elements'


function Login({ onLoggedIn, onRegister }) {
    const goToRegister = event => {
        event.preventDefault() 

        onRegister() 
    }

    const login = event => {
        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()

        login(event)
    }

    return <div className='login'>
        <form onSubmit={onSubmit}>
            <h1 className='login_text'>LOGIN</h1>

            <Input type='email' name='email' placeholder='email' />
            <Input type='password' name='password' placeholder='password' />
            <div className='botones'>
                <Button type="submit" onSubmit={onSubmit}>Login</Button>
                <Button href='' onClick={goToRegister}>Register</Button>
            </div>
        </form>
    </div>
}

export default Login