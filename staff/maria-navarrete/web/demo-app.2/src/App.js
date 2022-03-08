import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

import { useState } from 'react'

function App() {
  const [view, setView] = useState('landing')
  const [token, setToken] = useState()

  const showLogin = () => setView('login')

  const showRegister = () => setView('register')

  const logout = () => {
    setToken()
    setView('landing')
  }

  const keepTokenAndShowHome = token => {
    setToken(token)
    setView('home')
  }

  return <>
    {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />}
    {view === 'login' && <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister} />}
    {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />}
    {view === 'home' && <Home token={token} onLogout={logout}/>}

  </>
}

export default App
