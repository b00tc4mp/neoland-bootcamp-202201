import './App.css'
import { Register, Login, Home, Profile } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'
const { validateToken } = validators

function App() {
  let tokenValid = true

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    tokenValid = false
  }

  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenNShowHome = token => { 
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }


  return <div>
    <Routes>
      <Route path="/*" element={ <Home onLogOut={deleteTokenNShowLanding} onRegister={showLogin} onLogin={showLogin}/> } />
      <Route path="register" element={ <Register onRegistered={showLogin} onLogin={showLogin} /> } />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> } /> 
      <Route path="profile" element={<Profile />}></Route>
      <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
    </Routes>
  </div>

}

export default App
