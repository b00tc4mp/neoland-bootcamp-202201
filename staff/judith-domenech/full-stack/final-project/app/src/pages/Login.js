import {Logo ,Login} from '../components'

export const LoginView = ({onRegister, onLoggedIn})=>{

    const goToRegister = event => {
        onRegister && onRegister(event)
    }

    const goToHome = event => {
        onLoggedIn && onLoggedIn(event)
    }

    return <>
        <Logo />
        <Login onRegister={goToRegister} onLoggedIn={goToHome} />
    
    </>
}