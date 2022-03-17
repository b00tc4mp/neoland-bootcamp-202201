import authenticateUser from "../logic/authenticateUser"

function Login({ onLoggedIn, onRegister }) {
    
    const goToRegister = event => {
        event.preventDefault()
        onRegister()
    }

    const login = event => {
        event.preventDefault()   
    const { target: { email: { value: email }, password: { value: password } } } = event

    try {
        authenticateUser(email, password)
            .then(() => onLoggedIn())
            .catch(error => alert(error.message))
    } catch (error) {
        alert(error.message)
    }
}
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={login} className="login__form" >
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <button className="login__goHome">Login</button>
        </form>
            <a className="register__link" onClick={goToRegister}>Register</a>
    </div>
}
export default Login