import './Login.css'
import { authenticateUser } from '../logic'
import { useState } from 'react'

//function Login(props) {
function Login({ onAuthenticated, onRegister }) {
    //const { onAuthenticated, onRegister } = props
    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const login = event => {
        event.preventDefault()

        // const email = event.target.email.value
        // const password = event.target.password.value
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
            //alert(error.message)

            // TODO use feedback instead of ugly monster alert

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
            <input className={`login__email-input ${emailFeedback? 'login__input--error' : ''}`} type="_email" name="email" placeholder="e-mail" />
            {emailFeedback && <span className="login__email-feedback">{emailFeedback}</span>}

            <input className={`login__password-input ${passwordFeedback? 'login__input--error' : ''}`} type="password" name="password" placeholder="password" />
            {passwordFeedback && <span className="login__password-feedback">{passwordFeedback}</span>}

            <button>Login</button>
            {feedback && <span className="login__feedback">{feedback}</span>}

            <a className="login__register-link" href="" onClick={event => {
                event.preventDefault()

                onRegister()
            }}>Register</a>
        </form>
    </div>
}

export default Login