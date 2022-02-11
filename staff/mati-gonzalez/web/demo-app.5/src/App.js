import Landing from './components/Landing'
import Login from './components/Login'
import { useState } from 'react' 
import Register from './components/Register'
import Home from './components/home'

function App() {
  const [view, setView] = useState('landing')
  const [token, stToken] = useState()

  const showLogin = () => setView('login')

  const showRegister = () => setView('register')

  const showHome = token => {
    setToken(token)
    setView('home')
  }

  return <>
    {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />}
    {view === 'login' && <Login onAuthenticated={showHome} onRegister={showRegister} />}
    {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />}
    {view === 'home' && <Home token={token} />}
    </>
}

export default App