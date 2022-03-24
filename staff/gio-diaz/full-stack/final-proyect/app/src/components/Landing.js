import './Landing.sass'

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
        <h1 className='landing__title'>Mind +</h1>
        <img className="landing__logo" src="https://i.giphy.com/media/fsbKeqwwkmE6LodM3T/giphy.webp" alt="" ></img>
        <div className='landing__container'>
            <button className="landing__login-button" href="" onClick={goToLogin}>Login</button>
            <button className="landing__register-button" href="" onClick={goToRegister}>Register</button>
        </div>
    </div>
}

export default Landing