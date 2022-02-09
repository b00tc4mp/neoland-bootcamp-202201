import './Landing.css'

function Landing(props) {
    const { onLogin, onRegister } = props

    return <div className="landing">
        <div>
            <a href="" className="landing__login-link" onClick={event => {
                event.preventDefault()
                onLogin()
            }}>Login</a> or <a href="" className="landing__register-link" onClick={event => {
                event.preventDefault()
                onRegister()
            }}>Register</a>
        </div>
    </div>
}

export default Landing