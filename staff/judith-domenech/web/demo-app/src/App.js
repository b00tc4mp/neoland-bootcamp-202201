import Landing from './components/Landing'
import Login from './components/Login'
import { useState } from 'react'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
  const [token, setToken] = useState(sessionStorage.token)
  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenAndShowHome = token => {
    sessionStorage.token = token
    setToken(token)
    navigate('/')
  }

  const logout = () => {
    setToken()
  }

  return <>
  <Routes>
    <Route path="/*" element={token ? <Home token={token} onLogout={logout} /> : <Landing onLogin={showLogin} onRegister={showRegister} /> } />
    <Route path="login" element={!token? <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
    <Route path="register" element={!token? <Register onLogin={showLogin} onRegistered={showLogin} /> : <Navigate replace to="/" />}/>
    <Route path="*" element={!token? <h1>Sorry, this path does not exist :P</h1> : <Navigate replace to="/" />} />
    </Routes>
  </>
}

export default App

