import './Register.sass'
import { RegisterForm, Logo } from '../components'

export const Register = ({onLogin, onRegistered }) => {


    const goToLogin = event => {
        onLogin && onLogin(event)
        onRegistered && onRegistered(event)
    }

    return <>
        <h1>Hello Register</h1>
            <Logo/>
            <RegisterForm onLogin={goToLogin} onRegistered={goToLogin}/>
    </>

}