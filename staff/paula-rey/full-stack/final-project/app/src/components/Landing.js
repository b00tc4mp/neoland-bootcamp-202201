import './Landing.sass'

export function Landing({ onLogin, onRegistered }) {
    const goToLogIn = event => {
        event.preventDefault()
        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()
        onRegistered()
    }

    return <div className="landing">
        <a href="" onClick={goToLogIn}>Login</a> or <a href="" onClick={goToRegister}>Register</a>
    </div>
}
