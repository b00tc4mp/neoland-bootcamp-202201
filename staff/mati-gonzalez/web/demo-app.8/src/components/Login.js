import './Login.css'
import { authenticateUser } from '../logic'
import { useState } from 'react'
import Feedback from './Feedback'
import Password from './Password';
import Input from './Input'

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

    const clearPasswordFeedback = () => setPasswordFeedback()

    const clearEmailFeedback = () => setEmailFeedback()

    return <div className="login">
        <form className="login__form" onSubmit={login}>
            <Input type="email" name="email" feedback={emailFeedback} onFocus={clearEmailFeedback} />
            <Password name="password" feedback={passwordFeedback} onFocus={clearPasswordFeedback} />

            <button>Login</button>
            {feedback && <Feedback message={feedback} level="error" />}

            <a className="login__register-link" href="" onClick={event => {
                event.preventDefault()

                onRegister()
            }}>Register</a>
        </form>
    </div>
}

export default Login