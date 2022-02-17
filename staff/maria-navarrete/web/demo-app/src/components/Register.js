import './Register.css'
import { registerUser } from '../logic'
import { useState } from 'react'
import Feedback from './Feedback'
import Password from './Password'
import Input from './Input'

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

            if(message.search(/\bname\b/)!==-1){
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

    const clearNameFeedback = () => setNameFeedback()
    const clearEmailFeedback = () => setEmailFeedback()
    const clearPasswordFeedback = () => setPasswordFeedback()

    return <div className="register">
        <form className="register__form" onSubmit={register}>
            <Input type="text" name="name" placeholder="Name" feedback={nameFeedback} onFocus={clearNameFeedback}/>
            <Input  type="email" name="email" placeholder="E-mail" feedback={emailFeedback} onFocus={clearEmailFeedback} />
            <Password name="password" placeholder="Password" feedback={passwordFeedback} onFocus={clearPasswordFeedback}/>
            <button>Register</button>
            {feedback && <Feedback message={feedback} level="error"/>}
            
            <a href="" className="register__login-link" onClick={goToLogin}>Login</a>
        </form>
    </div>
}

export default Register