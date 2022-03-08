import './Landing.css'

function Landing({ onLogin, onRegister }) {

    const goToLogin = event => {
        event.preventDefault()
        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()
        onRegister()
    }

    return <div className="landing">
        <div>
            <a href="" className="landing__login-link" onClick={goToLogin}>Login</a> or <a href="" className="landing__register-link" onClick={goToRegister}>Register</a>
        </div>
    </div>
}

export default Landing