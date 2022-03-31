import './App.css';
import { Home, Register, Login, Profile, UpdatePassword, DeleteAccount, GraffitiDetails, Results} from './components'
import { IconLogo, IconProfile, IconHamburger } from './components/icons'
import { Header } from './components/elements';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { validators} from 'commons'
import { Input } from './components/form-elements'
import { Button } from './components'


const {validateToken } = validators

function App() {
  
  useEffect(() => {
  }, [])
  
  const goToBack = () => navigate(-1)
  const navigate = useNavigate()
  const showHome = () => navigate('/')
  const showLogin = () => navigate('login')
  const showRegister = () => navigate('register')
  const showProfile = () => navigate('profile')
  const showUpdatePassword = () => navigate('profile/update-password')
  const showDeleteAccount = () => navigate('profile/delete-account')
  
  
  return <div>
    <Header onHamburger={() => alert('click hamburger')} onProfile={() => navigate('profile')} onLogo={() => navigate('/')} />
    
    


  <Routes>

      <Route path='/*' element={<Home onProfile={showProfile} onLogin={showLogin} onBack={goToBack}/>} />
      <Route path='/register' element={< Register onRegistered={showLogin} onLogin={showLogin}/>} />
      <Route path='/login' element={<Login onLogged={showHome} onRegister={showRegister}/>} />
      <Route path='profile' element={sessionStorage.token ? < Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogOut={showLogin} /> : <Navigate replace to='/login' />} />
      <Route path='profile/update-password' element={< UpdatePassword onBack={goToBack} />} />
      <Route path='profile/delete-account' element={< DeleteAccount onDeletedAccount={showLogin} onBack={goToBack} />} />
      {/* <Route path='/*' element={<Navigate replace to='/'/>} /> */}
    </Routes>
  </div>
}

export default App;