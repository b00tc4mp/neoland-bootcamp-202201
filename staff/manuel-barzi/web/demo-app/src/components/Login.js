import './Login.css'

function Login() {
    return <div className="login">
        <form className="login__form">
            <input className="login__email-input" type="email" name="email" placeholder="e-mail" />
            <span className="login__email-feedback">wrong email</span>
            <input className="login__password-input" type="password" name="password" placeholder="password" />
            <span className="login__password-feedback">wrong password</span>
            <button>Login</button>
            <span className="login__feedback">wrong credentials</span>
            <a className="login__register-link" href="">Register</a>
        </form>
    </div>
}

export default Login