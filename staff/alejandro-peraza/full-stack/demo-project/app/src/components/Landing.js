import './Landing.css'

function Landing({ onLogin, onRegistered }) {
    const goToLogIn = event => {
        event.preventDefault()
        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()
        onRegistered()
    }

    return <div className="landing">
        <a onClick={goToLogIn}>Login</a> or <a onClick={goToRegister}>Register</a>
    </div>
}
export default Landing
