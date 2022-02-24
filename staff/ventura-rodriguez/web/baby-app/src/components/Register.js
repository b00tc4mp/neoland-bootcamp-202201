import './Register.css'
import { registerUser } from '../logic'

const Register = ({ onLogin }) => {
    
    // DEBUGGERRRRRRRRRRRRRRRRRRRRRRR

    const register = event => {

        event.preventDefault()

        const { target: {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password }
        } } = event

        try {
            debugger
            registerUser(name, surname, email, password)
            .then(() => {debugger; onLogin()})
            .catch( error => {throw error})
        }
        catch ({ message }) {alert(message)}


    }
    // Capturar los datos del formulario
    // Maneja errores asíncronos
    // Llama al logic
    // Repintar la vista para llevarme a login

    return <>
        <h1>Hello register</h1>
        <form onSubmit={register}> 
            <input className="register__name-input" type="text" name="name" placeholder="name" />
            <input className="register__surname-input" type="text" name="surname" placeholder="surname" />
            <input className="register__email-input" type="email" name="email" placeholder="e-mail" />
            <input className="register__password-input" type="password" name="password" placeholder="password" />
            <button>Register</button>
            <a className="register__login-link" onClick={event => {
                event.preventDefault()
                onLogin()
            }}>Login</a>
        </form>
    </> 

}


export default Register