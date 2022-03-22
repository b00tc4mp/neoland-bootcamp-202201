import './Register.css'
import { registerUser } from '../logic'

function Register({ onRegistered, onLogin }) {

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(onRegistered)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToLogin = event => {
        event.preventDefault()
        onLogin()
    }

    return <div className='register'>
        <form onSubmit={register}>
            <input type='text' name='name' placeholder='name' />
            <input type='email' name='email' placeholder='email' />
            <input type='password' name='password' placeholder='password' />
            <button>Register</button>
            <a href="" onClick={goToLogin}>Login</a>
        </form>
    </div>

}

export default Register