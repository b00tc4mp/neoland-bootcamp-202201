import './App.css';
import { Home, Register, Login, Profile, UpdatePassword, Header, DeleteAccount} from './components'
import { LogoIcon, ProfileIcon } from './components/icons'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { validators} from 'commons'
const {validateToken } = validators

function App() {
  
  useEffect(() => {
    try {
      if(sessionStorage.token) validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
      alert('session has expired')
    }
  }, [])
  
  const navigate = useNavigate()
  const showHome = () => navigate('/')
  const showLogin = () => navigate('login')
  const showRegister = () => navigate('register')
  const showProfile = () => navigate('profile')
  const showUpdatePassword = () => navigate('profile/update-password')
  const showDeleteAccount = () => navigate('profile/delete-account')
  
  return <div>
  
  	{/* <Login /> */}
  	{/* <LogoIcon /> */}
    <ProfileIcon />

    {/* <Header onProfile={showProfile} onHome={showHome}/> */}

  {/* <Routes>
      <Route path='/*' element={<Home onProfile={showProfile} onLogin={showLogin}/>} />
      <Route path='/register' element={< Register onRegister={showLogin} onLogged={showLogin}/>} />
      <Route path='/login' element={<Login onLogged={showHome} onRegister={showRegister}/>} />
      <Route path='profile' element={sessionStorage.token ? < Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogOut={showLogin} /> : <Navigate replace to='/login' />} />
      <Route path='profile/update-password' element={< UpdatePassword onBack={showProfile} />} />
      <Route path='profile/delete-account' element={< DeleteAccount onDeletedAccount={showLogin} onBack={showProfile} />} />
    </Routes> */}
  </div>
}

export default App;