import './Login.css'
import { authenticateUser } from '../logic'
import { useState } from 'react'

function Login({ onAuthenticated, onRegister}){
    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const login = event => {
        event.preventDefault()
    

     // const email = event.target.email.value
        // const password = event.target.password.value
        const { target: { email: { value: email }, password: { value: password } } } = event

        try{
            authenticateUser(email,password)
            .then(token => { 
                onAuthenticated(token)

            })
            .catch(error => {
                setEmailFeedback()
                setPasswordFeedback()
                setFeedback(error.message)
            })
        } catch (error){

            const{ message } = error
        
            setFeedback()

            if(message.includes('email')){
                setPasswordFeedback()
                setEmailFeedback(message)             
            } else if {}
        }
}
}