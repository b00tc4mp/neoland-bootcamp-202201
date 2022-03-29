import './App.css';
import { Landing, Home, Register, Login, Profile, UpdatePassword, DeleteAccount, Search, Results, RecipeDetails } from './components'
import { IconLogo, IconProfile, IconHamburger } from './components/icons'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Header } from './components/elements';
import { useEffect, useState } from 'react'
import { validators } from 'commons'

const { validateToken } = validators

function App() {

  useEffect(() => {
    try {
      if (sessionStorage.token) validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
      alert('session has expired')
    }
  }, [])

  // const keepTokenNShowHome = token => {
  //   sessionStorage.token = token
  //   navigate('/')
  // }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }


  const navigate = useNavigate()
  const showLanding = () => navigate('/')
  const showLogin = () => navigate('/login')
  const showRegister = () => navigate('/register')
  const showHome = () => navigate('/')
  const showProfile = () => navigate('/profile')
  const showUpdatePassword = () => navigate('/profile/update-password')
  const showDeleteAccount = () => navigate('/profile/delete-account')

  return <div>
    <Header onProfile={showProfile} onHome={showHome} />

    <Routes>
      <Route path="/*" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} />
      {/* <Route path="/search" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} /> */}
      <Route path="/register" element={sessionStorage.token ? <Navigate to="/" /> : <Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path="/login" element={sessionStorage.token ? <Navigate to="/" /> : <Login onLoggedIn={showHome} onRegister={showRegister} />} />
      <Route path='/profile' element={sessionStorage.token ? < Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogOut={showLanding} /> : <Navigate replace to='/login' />} />
      <Route path='/profile/update-password' element={< UpdatePassword onBack={showProfile} />} />
      <Route path='/profile/delete-account' element={< DeleteAccount onDeletedAccount={showLogin} onBack={showProfile} />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  </div>
}

export default App