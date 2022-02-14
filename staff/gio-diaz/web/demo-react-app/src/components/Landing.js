import './Landing.css'

function Landing({ onLogin, onRegister }) {

    return <div className='landing'>
        <div>
            <a className='landing__login' onClick={(event) => {
                event.preventDefault()
                onLogin()
            }}>Login</a>
            <p>or</p>
            <a className='landing__register' onClick={(event) => {
                event.preventDefault()
                onRegister()
            }}>Register</a>
        </div>
    </div>
}


export default Landing
