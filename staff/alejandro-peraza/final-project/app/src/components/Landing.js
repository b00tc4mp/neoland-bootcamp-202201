import { Login } from './index'
import { Register } from './index'
import { Route, Routes, useNavigate } from 'react-router-dom'

function Landing() {

    const navigate = useNavigate()

    const showLogin = () => navigate('login')
    const goToLogin = event => {
        event.preventDefault()
        showLogin()
    }
    
    const showRegister = () => navigate('Register')
    const goToRegister = event => {
        event.preventDefault()
        showRegister()
    }

    return <div className='landing'>
        <nav className='landing__header'>
            <button className='login__button' onClick={goToLogin}>Login</button>
            <button className='register__button' onClick={goToRegister}>Register</button>
        </nav>
        <h1>Welcome To CFD</h1>

        <Routes>
            <Route path='login' element={<Login onLogged={showLogin} />} />
            <Route path='register' element={<Register onRegistered={showRegister} />} />
        </Routes>
    </div>


}

export default Landing