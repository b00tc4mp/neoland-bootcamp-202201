import Landing from './components/Landing'
import Login from './components/Login'
import { useState } from 'react'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  const [view, setView] = useState('landing')
  const [token, setToken] = useState()

  const showLogin = () => setView('login')

  const showRegister = () => setView('register')

  const keepTokenAndShowHome = token => {
    setToken(token)
    setView('home')
  }

  const logout = () => {
    setToken()
    setView('landing')
  }

  return <>
    {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />}
    {view === 'login' && <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} />}
    {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />}
    {view === 'home' && <Home token={token} onLogout={logout} />}
  </>
}

export default App