import './App.css';
import { Landing, Home, Register, Login, Profile, UpdatePassword, DeleteAccount, Search, Results } from './components'
import { IconLogo, IconProfile, IconHamburger } from './components/icons'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Header } from './components/elements';
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

  const keepTokenNShowHome = token => { 
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }

  
  const navigate = useNavigate()
  const showLanding = () => navigate('/')
  const showLogin = () => navigate('/login')
  const showRegister = () => navigate('/register')
  const showHome = () => navigate('/home')
  const showProfile = () => navigate('/profile')
  const showUpdatePassword = () => navigate('/profile/update-password')
  const showDeleteAccount = () => navigate('/profile/delete-account')
  
  return <div>
  
    {/* <Login /> */}
  	{/* <IconLogo /> */}
    {/* {<IconProfile /> } */}
    {/* <IconHamburger /> */}

    {/* <Results /> */}



{ <Header onProfile={showProfile} onHome={showHome}/> }

  { <Routes>
      <Route path="/*" element={<Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="/register" element={<Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path="/login" element={<Login onLogged={showHome} onRegister={showRegister} />} />
      <Route path="/home/*" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Navigate replace to='/login' />} />
      <Route path='/profile' element={sessionStorage.token ? < Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogOut={showLanding} /> : <Navigate replace to='/login' />} />
      <Route path='/profile/update-password' element={< UpdatePassword onBack={showProfile} />} />
      <Route path='/profile/delete-account' element={< DeleteAccount onDeletedAccount={showLogin} onBack={showProfile} />} />
      </Routes>
} 
  </div>
}
 
export default App