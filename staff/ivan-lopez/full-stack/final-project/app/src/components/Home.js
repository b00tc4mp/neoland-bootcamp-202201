// import { retrieveUser } from '../logic'
import { Login, Profile } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Home() {
    const [name, setName] = useState()
    const [view, setView] = useState()
    const navigate = useNavigate()

    const showLogin = () => navigate('login')
    const showProfile = () => navigate('profile')


    // useEffect(() => {
    //     try {
    //         retrieveUser(sessionStorage.token)
    //             .then(user => setName(user.name))
    //             .catch(error => alert(error.message))
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // })

    const goToLogin = event => {
        event.preventDefault()
        showLogin()
    }


    // const goToProfile = event => {
    //     event.preventDefault()
    //     showProfile()
    // }



    return <div className='home'>
        <nav className='home__header'>
            <button className='login__button' onClick={goToLogin}>Login</button>

        </nav>
        <h1>Welcome home, {name}!</h1>

        <Routes>
            <Route path='login' element={<Login onLogin={showLogin} />} />

        </Routes>
    </div>
}

export default Home