import './Register.sass'
import { registerUser } from '../logic'


function Register({ onLogin, onRegistered }) { 
   
    const register = event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event
        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('successfully registered user')
                    onRegistered && onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goToLogin = (event) => {
        event.preventDefault()
        onLogin && onLogin()
    }

    const onSubmit = event => {
        event.preventDefault()
        register(event)
    }

    return <div className='register'>
        <form className='register__form' onSubmit={onSubmit}>
        <h1 className='register__title'>REGISTER</h1>
            <input className='register__input-name' type='text' name='name' placeholder='name' />
            <input className='register__input-email' type='email' name="email" placeholder='email' />
            <input className='register__input-password' type='password' name='password' placeholder='password' />
            <button className='register__button' type='submit'>Register</button>
            <a className='login__link' href='' onClick={goToLogin}>Login</a>
        </form>
    </div>

}

export default Register
