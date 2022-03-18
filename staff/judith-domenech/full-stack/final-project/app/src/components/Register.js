import './Register.sass'
import { registerUser } from '../logic'
import logo from "../assets/racketMatch.png"

function Register({ onLogin, onRegistered }) {
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

    return <form className='register' onSubmit={register}>
        <div className='register__container'>
            <img className='register__logo' src={logo} alt='Logo racketMatch' width='' height=' '></img>
            <div className="register__wrapper">
            <input className='register__input' type="text" name="name" placeholder="Name" />
            <input className='register__input' type="email" name="email" placeholder="Email" />
            <input className='register__input' type="password" name="password" placeholder="Password" />
            <button className='register__button'>Register</button>
            </div>

            <a className="register__login-link" href="" onClick={event => {
                event.preventDefault()

                onLogin()
            }}>Login</a>
        </div>

    </form>
}

export default Register