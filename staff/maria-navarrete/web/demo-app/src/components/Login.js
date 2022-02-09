import './Login.css'
import { authenticateUser } from '../logic'
import { useState } from 'react'

function Login({ onAuthenticated, onRegister }) {

    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    onAuthenticated(token)
                })
                .catch(error => {
                    setEmailFeedback()
                    setPasswordFeedback()
                    setFeedback(error.message)
                })
        } catch (error) {
            const { message } = error
            setFeedback()

            if (message.includes('email')) {
                setPasswordFeedback()
                setEmailFeedback(message)
            } else if (message.includes('password')) {
                setEmailFeedback()
                setPasswordFeedback(message)
            }
        }
    }

    return <div className="login">
        <form className="login__form" onSubmit={login}>
            <input className={`login__email-input ${emailFeedback ? 'login__input--error' : ''}`} type="text" name="email" placeholder="E-mail" />
            {emailFeedback && <span className="login__email-feedback">{emailFeedback}</span>}

            <div className="login__password-area">
                <input className={`login__password-input ${passwordFeedback ? 'login__input--error' : ''}`} type="password" name="password" placeholder="Password" />
                <label className="login__toggle-icon login__toggle-icon--show" id="togglePassword"></label>
            </div>
            {passwordFeedback && <span className="login__password-feedback">{passwordFeedback}</span>}
            <button>Login</button>
            {feedback && <span className="login__feedback">{feedback}</span>}
            <a href="" className="login__register-link" onClick={event => {
                event.preventDefault()
                onRegister()
            }}>Register</a>
        </form>
    </div>
}

export default Login