import { useState } from 'react'
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';


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
    {view === 'home' && <Home token={token} onLogout={logout} />}
    {view === 'register' && <Register onRegistered={showLogin} onLogin={showLogin} />}
    {view === 'login' && <Login onAuthenticated={keepTokenAndShowHome} onRegister={showRegister}/>}
  </>

}

export default App
