import './Register.css'
import { registerUser } from '../logic'

function Register() {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            register(name, email, password)
                .then(() => alert('user registered'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={register}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Register</button>
    </form>
}

export default Register