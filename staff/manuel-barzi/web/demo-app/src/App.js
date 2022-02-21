import Landing from './components/Landing'
import Login from './components/Login'
import { useState } from 'react'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  // const [view, setView] = useState('landing')
  const [token, setToken] = useState()
  const navigate = useNavigate()

  // const showLogin = () => setView('login')
  const showLogin = () => navigate('login')

  // const showRegister = () => setView('register')
  const showRegister = () => navigate('register')

  const keepTokenAndShowHome = token => {
    setToken(token)
    // setView('home')
    navigate('/')
  }

  const logout = () => {
    setToken()
    // setView('landing')
  }

  return <>
    {/* {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />} */}
    {/* {view === 'login' && <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} />} */}
    {/* {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />} */}
    {/* {view === 'home' && <Home token={token} onLogout={logout} />} */}

    <Routes>
      <Route path="/" element={token ? <Home token={token} onLogout={logout} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="login" element={<Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} />} />
      <Route path="register" element={<Register onLogin={showLogin} onRegistered={showLogin} />} />
      <Route path="*" element={<h1>Sorry, this path does not exist :P</h1>} />
    </Routes>
  </>
}

export default App