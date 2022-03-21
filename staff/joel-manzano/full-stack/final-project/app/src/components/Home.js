import { Login, Register, Profile } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UpdatePassword from './UpdatePassword'

function Home({onLogin, onProfile, onRegister}) {
    const [name, setName] = useState()
    const [view, setView] = useState()

    const navigate = useNavigate()
    // const showUpdatePassword = () => navigate('profile/update-password')
    // const showDeleteAccount = () => navigate('profile/delete-account')

    return <div className='home'>
        {/* <nav className='home__header'>
            <button className='login__buttom' onClick={goToLogin}>Login</button>
            <button className='register__buttom' onClick={goToRegister}>Register</button>
            <a href="" onClick={goToProfile}>Profile</a>
        </nav> */}
        <h1>HOME</h1>

        <Routes>
            {/* <Route path='login' element={<Login onLogged={showLogin} />} />
            <Route path='register' element={< Register onRegister={showLogin} />} />
            <Route path='profile/update-password' element={< UpdatePassword onBack={showProfile} />} />
            <Route path='profile/delete-account' element={< Profile onDeleteAccount={showDeleteAccount} />} />
            <Route path='profile' element={< Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} /> */}
        </Routes>
    </div>
}

export default Home