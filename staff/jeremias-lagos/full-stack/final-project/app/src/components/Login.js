import './Login.sass'
import { authenticateUser } from '../logic'


function Login({ onLogged, onRegister }) {

    const goToRegister = event => {
        event.preventDefault() 
        onRegister && onRegister()
    }

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLogged && onLogged()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        login(event)
    }

    return <div className='login'>
        <form className='login__wrapper' onSubmit={onSubmit}>
            <h1 className='login__title'>LOGIN</h1>
            <input className='login__input-email' type='email' name='email' placeholder='email' />
            <input className='login__input-password' type='password' name='password' placeholder='password' />
            <button className='login__button' type='submit'>Login</button>
            <a className='register__link' href='' onClick={goToRegister}>Register</a>
        </form>
    </div>
}

export default Login