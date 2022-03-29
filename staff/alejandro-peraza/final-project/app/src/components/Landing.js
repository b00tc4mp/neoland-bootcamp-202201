import { Login } from './index'
import { Register } from './index'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button } from "../components"
import fondo from '../assets/images/fondo.png'
import "./Landing.sass"

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
            <div className='text intro'>
                <h1>Welcome To Coctail's For Dummies.</h1>
            </div>
            <figure className='fondo' >
                <img className='fondo-img' src={fondo} />
            </figure>

            <Button className='login__button' onClick={goToLogin}>Login</Button>
            <Button className='register__button' onClick={goToRegister}>Register</Button>

        </nav>
        <Routes>
            <Route path='login' element={<Login onLogged={showLogin} />} />
            <Route path='register' element={<Register onRegistered={showRegister} />} />
        </Routes>
    </div>


}

export default Landing