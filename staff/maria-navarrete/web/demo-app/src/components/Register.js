import './Register.css'
import { registerUser } from '../logic'

function Register({ onLogin, onRegistered }) {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
    
        try{
            registerUser(name, email, password)
                .then(() => onRegistered())
                .catch(error => alert(error.message))
        } catch(error){
            alert(error.message)
        }
    }

    return <div className="register">
        <form className="register__form" onSubmit={register}>
            <input className="register__name-input" type="text" name="name" placeholder="Name" />
            <input className="register__email-input" type="email" name="email" placeholder="E-mail" />
            <div className="register__password-area">
                <input className="register__password-input" type="password" name="password" placeholder="Password" />
                <label className="register__toggle-icon register__toggle-icon--show" id="togglePassword"></label>
            </div>
            <span className="register__password-caps-status">*Caps Lock On</span>
            <button>Register</button>
            <a href="" className="register__login-link" onClick={ event => {
                event.preventDefault()
                onLogin()
            }}>Login</a>
        </form>
    </div>
}

export default Register