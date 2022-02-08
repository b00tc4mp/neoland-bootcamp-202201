import Landing from './components/Landing'
import Login from './components/Login'
import { useState } from 'react'
import Register from './components/Register'

function App() {
  const [view, setView] = useState('landing')

  const showLogin = () => setView('login')

  const showRegister = () => setView('register')

  return <>
    {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />}
    {view === 'login' && <Login />}
    {view === 'register' && <Register />}
  </>
}

export default App
