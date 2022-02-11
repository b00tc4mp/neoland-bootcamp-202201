import './Landing.css'

function Landing({ onLogin, onRegister }) {

    const goTologin= event => {
        event.preventDefault()

        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()

        onRegister()
    }

    return <div className="landing">
        <div>
            <a className="landing__login" href="" onClick={goTologin}>Login</a> or
            <a className="landing__register" href="" onClick={goToRegister}>Register</a>
        </div>
    </div>
}

export default Landing