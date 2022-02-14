import './Register.css'
import { registerUser } from '../logic'
import { useState } from 'react'
import Feedback from './Feedback'

function Register({ onLogin, onRegistered }) {
    const [nameFeedback, setNameFeedback] = useState()
    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
    
        try{
            registerUser(name, email, password)
                .then(() => onRegistered())
                .catch(error=>{
                    setNameFeedback()
                    setEmailFeedback()
                    setPasswordFeedback()
                    setFeedback(error.message)
                })
        } catch({message}){
            setFeedback()

            if(message.includes('name')){
                setPasswordFeedback()
                setEmailFeedback()
                setNameFeedback(message)
            } else if(message.includes('email')){
                setPasswordFeedback()
                setEmailFeedback(message)
                setNameFeedback()
            } else if(message.includes('password')){
                setPasswordFeedback(message)
                setEmailFeedback()
                setNameFeedback()
            }
        }
    }

    const goToLogin = event =>{
        event.preventDefault()
        onLogin()
    }

    return <div className="register">
        <form className="register__form" onSubmit={register}>
            <input className={`register__name-input ${nameFeedback? 'register__input--error':''}`} type="text" name="name" placeholder="Name" />
            {nameFeedback && <Feedback message={nameFeedback} level ="error" version="mini"/>}
            <input className={`register__email-input ${emailFeedback? 'register__input--error':''}`} type="email" name="email" placeholder="E-mail" />
            {emailFeedback && <Feedback message={emailFeedback} level ="error" version="mini"/>}
            <div className="register__password-area">
                <input className={`register__password-input ${passwordFeedback? 'register__input--error':''}`} type="password" name="password" placeholder="Password" />
                {passwordFeedback && <Feedback message={passwordFeedback} level ="error" version="mini"/>}
                <label className="register__toggle-icon register__toggle-icon--show" id="togglePassword"></label>
            </div>
            <button>Register</button>
            <a href="" className="register__login-link" onClick={goToLogin}>Login</a>
        </form>
    </div>
}

export default Register