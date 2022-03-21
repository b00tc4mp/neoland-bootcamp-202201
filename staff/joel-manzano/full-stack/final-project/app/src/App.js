import './App.css';
import { Home, Register, Login, Profile, UpdatePassword, DeleteAccount, GraffitiDetails} from './components'
import { IconLogo, IconProfile, IconHamburger } from './components/icons'
import { Header } from './components/elements';
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
  	{/* <IconLogo /> */}
    {/* <IconProfile /> */}
    {/* <IconHamburger /> */}
    {/* <Header onHamburger={() => alert('click hamburger')} onProfile={() => alert('click profile')} onLogo={() => alert('click logo')} /> */}
    <GraffitiDetails graffitiId='622f56311e78c0e46fce4532'/>



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