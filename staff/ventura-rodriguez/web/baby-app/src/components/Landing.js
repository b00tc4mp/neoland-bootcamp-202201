import './Landing.css'

function Landing(props) {
    const { onLogin, onRegister } = props

    const goToLogin = event => {
        event.preventDefault()

        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()

        onRegister()
    }

    return <div className="landing">
        <div className="landing__links">
            <a className="landing__login" href="" onClick={goToLogin}>Login</a>
            <p className="landing__text">or</p>
            <a className="landing__register" href="" onClick={goToRegister}>Register</a>
        </div>
    </div>
}

export default Landing