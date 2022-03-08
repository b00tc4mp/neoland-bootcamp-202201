import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { validateToken } from './logic/helpers/validators'
import Container from './components/Container'


function App() {
  const [theme, setTheme] = useState('light')
  let tokenValid = true

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    tokenValid = false
  }

  const [token, setToken] = useState(sessionStorage.token)
  const navigate = useNavigate()

  useEffect(() => !tokenValid && navigate('/'), [])

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenAndShowHome = token => {
    sessionStorage.token = token
    setToken(token)
    navigate('/')
  }

  const logout = () => {
    delete sessionStorage.token
    setToken()
  }

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return <Container theme={theme}>
    <Routes>
      <Route path="/*" element={token ? <Home token={token} onLogout={logout} onToggleTheme={toggleTheme} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="login" element={!token ? <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="register" element={!token ? <Register onLogin={showLogin} onRegistered={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="*" element={!token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
    </Routes>
  </Container>
}

export default App
