import Landing from './components/Landing'
import Home from './components/Home'
import { useState } from 'react'

function App() {

  const [view, setView] = useState('landing')
  const [token, setToken] = useState()


  const showHome = token => {
    setToken(token)
    setView('home')
  }
  const showLanding = () => setView('landing')
  return <>
    {view === 'landing' && <Landing onEnter={showHome} />}
    {view === 'login' && <Login onAuthenticated={showHome} onRegister={showRegister} />}
    {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />}
    {view === 'home' && <Home token={token} onLogout={showLanding} />}
    </>
}

export default App