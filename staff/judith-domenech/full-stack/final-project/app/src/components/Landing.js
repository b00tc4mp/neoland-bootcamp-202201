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
        <div className='landing__buttons'>
            <button className="landing__buttons-login" href="" onClick={goTologin}>Login</button> 
            <button className="landing__buttons-register" href="" onClick={goToRegister}>Register</button>
        </div>
    </div>
}

export default Landing