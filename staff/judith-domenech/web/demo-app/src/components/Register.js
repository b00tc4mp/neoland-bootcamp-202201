import './Register.css'
import { registerUser } from '../logic'

function Register({ onLogin, onRegistered }) {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, surname: { value: surname }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, surname, email, password)
                .then(() => onRegistered())
                .catch(error => alert(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    return <div className="register">
        <form className="register__form" onSubmit={register}>
            <input className="register__name-input" type="text" name="name" placeholder="name" />
            <input className="register__surname-input" type="text" name="surname" placeholder="surname" />
            <input className="register__email-input" type="email" name="email" placeholder="e-mail" />
            <input className="register__password-input" type="password" name="password" placeholder="password" />
            <button>Register</button>
            <a className="register__login-link" href="" onClick={event => {
                event.preventDefault()

                onLogin()
            }}>Login</a>
        </form>
    </div>
}

export default Register