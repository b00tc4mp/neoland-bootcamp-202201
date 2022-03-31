import { Login } from './index'
import "./Landing.sass"
import { Register } from './index'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button } from "../components"
import fondo from '../assets/images/fondo.png'

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
            <figure className='fondo' >
                <img alt="intro" className='fondo-img' src={fondo} />
            </figure>
            <div className='botones'>
                <Button className='login__button' onClick={goToLogin}>Login</Button>
                <Button className='register__button' onClick={goToRegister}>Register</Button>
            </div>
        </nav>
        <Routes>
            <Route path='login' element={<Login onLogged={showLogin} />} />
            <Route path='register' element={<Register onRegistered={showRegister} />} />
        </Routes>
    </div>


}

export default Landing