import './Login.css'
import Feedback from './Feedback'
import Password from './Password'
import Input from './Input'
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
        } catch ({message}) {
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

    const goToRegister = event =>{
        event.preventDefault()
        onRegister()
    }

    const clearPasswordFeedback = () => setPasswordFeedback()
    const clearEmailFeedback = () => setEmailFeedback()

    return <div className="login">
        <form className="login__form" onSubmit={login}>
            <Input type="email" name="email" feedback={emailFeedback} onFocus={clearEmailFeedback} />
           <Password name="password" feedback={passwordFeedback} onFocus={clearPasswordFeedback}/>

            <button>Login</button>
            {feedback && <Feedback message={feedback} level="error"/>}
            <a href="" className="login__register-link" onClick={goToRegister}>Register</a>
        </form>
    </div>
}

export default Login