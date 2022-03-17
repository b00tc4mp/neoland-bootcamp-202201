import './Landing.css'

function Landing( { onLogin, onRegister } ) {


    const goToLogin = event => {
        event.preventDefault()

        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()

        onRegister()
    }

    return <div className="landing">
        <h1>LANDING</h1>
        <div>
            <a className="landing__login" href="" onClick={goToLogin}>Login</a> or <a className="landing__register" href="" onClick={goToRegister}>Register</a>
            <img className="landing__logo" src="https://i.giphy.com/media/fsbKeqwwkmE6LodM3T/giphy.webp" alt="" ></img>
        </div>
    </div>
}

export default Landing