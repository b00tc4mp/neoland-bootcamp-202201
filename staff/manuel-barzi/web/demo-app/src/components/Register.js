import './Register.css'

function Register() {
    return <div className="register">
        <form className="register__form">
            <input className="register__name-input" type="text" name="name" placeholder="name" />
            <input className="register__surname-input" type="text" name="surname" placeholder="surname" />
            <input className="register__email-input" type="email" name="email" placeholder="e-mail" />
            <input className="register__password-input" type="password" name="password" placeholder="password" />
            <button>Register</button>
            <a className="register__login-link" href="">Login</a>
        </form>
    </div>
}

export default Register