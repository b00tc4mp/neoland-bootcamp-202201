import { Home, Login, Register, Profile, UpdatePassword, DeleteAccount, TournamentList} from './components'
import { IconLogo, IconProfile, IconHamburger } from './components/icons'
import { Header } from './components/elements'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators} from 'commons'
import { useEffect, useState } from 'react'


const { validateToken } = validators

function App() {

  useEffect(() => {
    try {
      if(sessionStorage.token) validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
      alert('Session expired')
    }
  }, [])

  const navigate = useNavigate()

  const goToBack = () => navigate(-1)
  const showHome = () => navigate('/')
  const showLogin = () => navigate('/login')
  const showRegister = () => navigate('/register')
  const showProfile = () => navigate('/profile')
  const showUpdatePassword = () => navigate('/profile/update-password')
  const showDeleteAccount = () => navigate('/profile/delete-account')

  return <div>

    {/* {<Login } */}
    {/* <IconLogo /> */}
    {/*  { <IconProfile /> } */}
    {/* <IconHamburger /> */}
    <Header onLogo={showHome} onProfile={showProfile}/>  
    {/*<Input type='password' name='password' placeholder='password' /> */}
     {/* <TournamentDetails tournamentId='62307f5b3b05fb94ede3a325'/>   */}

    {/* <Results query='torneo' location='barcelona' date='2022-06-21' />  */}


    <Routes>
      <Route path="/*" element={<Home onBack={goToBack} onProfile={showProfile} onLogin={showLogin} />} />
      <Route path="/login" element={<Login onLogged={showHome} onRegister={showRegister} />} />
      <Route path="/register" element={<Register onRegisterd={showLogin} onLogin={showLogin} />} />
      <Route path= "/tournaments" element={<TournamentList onBack={goToBack}/>}/>
      <Route path="/profile" element={sessionStorage.token ? <Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogOut={showLogin} /> : <Navigate replace to ='/login' />} />
      <Route path="/profile/update-password" element={< UpdatePassword onBack={goToBack} />} />
      <Route path="/profile/delete-account" element={< DeleteAccount onDeletedAccount={showLogin} onBack={goToBack} />} />
    </Routes> 
  </div>
  
}

export default App
