import registerUser from "../logic/registerUser"
function Register({ onLogin, onRegistered}) {
   

    const goToLogin = event => {
        event.preventDefault()

        onLogin()
    }

    const register = event => {
        event.preventDefault()


        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <div>
        <h1>REGISTER</h1>
        <form onSubmit={register} className="register__form" >
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password"placeholder="Password" />
        <button className="register__button">Register</button>
        </form>
        <a className="register__login-link" onClick={goToLogin}>Login</a>
    </div>
}
export default Register