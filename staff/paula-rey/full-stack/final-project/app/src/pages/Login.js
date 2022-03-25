import { LoginForm, Logo } from '../components'


export const Login = ({onRegister, onLoggedIn}) => {

    const goToRegister = event => {
        onRegister && onRegister(event)
    }

    const goToHome = event => {
        onLoggedIn && onLoggedIn(event)
    }

    return <>
    <h1>hola login</h1>
        <Logo/>
        <LoginForm onRegister={goToRegister} onLoggedIn={goToHome}/>
    </>

}