import './Register.css'
import { registerUser } from '../logic'
import { useState } from 'react'
import Password from './Password';
import Input from './Input'
import Feedback from './Feedback'

function Register({ onLogin, onRegistered }) {
    const [nameFeedback, setNameFeedback] = useState()
    const [surnameFeedback, setSurnameFeedback] = useState()
    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, surname: { value: surname }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, surname, email, password)
                .then(() => onRegistered())
                .catch(error => setFeedback(error.message))
        } catch (error) {
            const { message } = error

            setFeedback()

            if (message.search(/\bname\b/) !== -1) {
                setNameFeedback(message)
                setSurnameFeedback()
                setEmailFeedback()
                setPasswordFeedback()
            } else if (message.includes('surname')) {
                setNameFeedback()
                setSurnameFeedback(message)
                setEmailFeedback()
                setPasswordFeedback()
            } else if (message.includes('email')) {
                setNameFeedback()
                setSurnameFeedback()
                setEmailFeedback(message)
                setPasswordFeedback()
            } else if (message.includes('password')) {
                setNameFeedback()
                setSurnameFeedback()
                setEmailFeedback()
                setPasswordFeedback(message)
            }
        }
    }

    const clearNameFeedback = () => setNameFeedback()
    const clearSurnameFeedback = () => setSurnameFeedback()
    const clearEmailFeedback = () => setEmailFeedback()
    const clearPasswordFeedback = () => setPasswordFeedback()

    return <div className="register">
        <form className="register__form" onSubmit={register}>
            <Input type="text" name="name" placeholder="name" feedback={nameFeedback} onFocus={clearNameFeedback} />
            <Input type="text" name="surname" placeholder="surname" feedback={surnameFeedback} onFocus={clearSurnameFeedback} />
            <Input type="email" name="email" placeholder="e-mail" feedback={emailFeedback} onFocus={clearEmailFeedback} />
            <Password name="password" placeholder="password" feedback={passwordFeedback} onFocus={clearPasswordFeedback} />

            <button>Register</button>
            {feedback && <Feedback message={feedback} level="error" />}

            <a className="register__login-link" href="" onClick={event => {
                event.preventDefault()

                onLogin()
            }}>Login</a>
        </form>
    </div>
}

export default Register