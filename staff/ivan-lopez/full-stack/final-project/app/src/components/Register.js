// import './Register.css'
import { registerUser } from '../logic'

function Register({ onLogin, onRegistered }) {

    
    const goToLogin = event => {
        event.preventDefault()
        onLogin()
    }

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => {
                    alert('Usuario registrado correctamente')
                    onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='register'>

        <form onSubmit={register}>

            <h1>REGISTER</h1>
            <input type='text' name='name' placeholder='name' />
            <input type='email' name='email' placeholder='email' />
            <input type='password' name='password' placeholder='password' />
            <button type='submit'>Register</button>
            <a href='' onClick={goToLogin}>Login</a>

        </form>
    </div>


}

export default Register