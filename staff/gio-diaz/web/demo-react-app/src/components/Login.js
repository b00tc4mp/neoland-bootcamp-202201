import './Login.css'
import { authenticateUser } from '../logic'
import { useState } from 'react'


function Login({ onAuthenticated, onRegister }) {

    const login = event => {
        event.preventDefault()

        const { target: {
            email: { value: email },
            password: { value: password }
        } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    onAuthenticated(token)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='login'>
        <form className='login__form' onSubmit={login}>
            <input className="login__email" type="email" name="email" placeholder="E-mail" />
            <input className="login__password" type="password" name="password" placeholder="Password" />
            <button type='submit'>Login</button>
            <a className='login__register-link' href='' onClick={event => {
                event.preventDefault()

                onRegister()
            }}>Register</a>
        </form>
    </div>


}

export default Login