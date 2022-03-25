import './Register'
import {Logo, Register} from '../components'

export const RegisterView = ({onRegistered, onLogin}) => {

    const goToLogin = event => {
        onRegistered && onRegistered(event)
        onLogin && onLogin()
    }

    return <>
        <Logo />
        <Register onRegistered={goToLogin} onLogin={goToLogin}/>
    
    </>
}