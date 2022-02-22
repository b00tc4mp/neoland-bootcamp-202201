import Landing from './components/Landing'
import Login from './components/Login'
import { useState, useEffect } from 'react'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validateToken }  from './logic/helpers/validators'

function App() {
  // const [view, setView] = useState('landing')

  let tokenValid = true

  try {
    validateToken(sessionStorage.token)
  } catch(error) {
    tokenValid = false
  }

  const [token, setToken] = useState(tokenValid? sessionStorage.token : undefined)
  const navigate = useNavigate()

  useEffect(() => !tokenValid && navigate('/'), [])

  // const showLogin = () => setView('login')
  const showLogin = () => navigate('login')

  // const showRegister = () => setView('register')
  const showRegister = () => navigate('register')

  const keepTokenAndShowHome = token => {
    sessionStorage.token = token
    setToken(token)
    // setView('home')
    navigate('/')
  }

  const logout = () => {
    delete sessionStorage.token
    
    setToken()
    // setView('landing')
  }

  return <>
    {/* {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />} */}
    {/* {view === 'login' && <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} />} */}
    {/* {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />} */}
    {/* {view === 'home' && <Home token={token} onLogout={logout} />} */}

    <Routes>
      <Route path="/*" element={token ? <Home token={token} onLogout={logout} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="login" element={!token? <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="register" element={!token? <Register onLogin={showLogin} onRegistered={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="*" element={!token? <h1>Sorry, this path does not exist :P</h1> : <Navigate replace to="/" />} />
    </Routes>
  </>
}

export default App