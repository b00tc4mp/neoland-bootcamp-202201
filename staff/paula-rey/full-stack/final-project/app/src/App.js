import './App.sass'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { validators } from 'commons'
import { Header, NavigationMenu } from './components'
const { validateToken } = validators

function App() {

  const isValidToken = () => {
    try {
      validateToken(sessionStorage.token)
      return true
    }
    catch (error) {
      alert(error.message)
      return false
    }
  }

  const navigate = useNavigate()

  // views
  const showHome = () => navigate('/')
  const showLogin = () => navigate('/iniciar-sesion')
  const showRegister = () => navigate('/registro')
  // const showFavorites = () => navigate('/favorites')
  // const showProfile = () => navigate('/profile')

  return <div>
    {
      sessionStorage.token && isValidToken() &&
      <Header />
    }

    <Routes>
      <Route path="/" element={
        sessionStorage.token && isValidToken() ? <Home /> : <Navigate replace to='/iniciar-sesion' />
      } />
      <Route path="/iniciar-sesion" element={
        !sessionStorage.token ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to='/' />
      } />
      <Route path="/registro" element={
        !sessionStorage.token ? <Register onLogin={showLogin} onRegistered={showLogin} /> : <Navigate replace to='/' />
      } />
      <Route path="/404" element={<h1>Page not found</h1>} />
      <Route path="/*" element={<Navigate replace to='/404' />} />
    </Routes>
    
    {
      sessionStorage.token && isValidToken() &&
      <NavigationMenu />
    }
  </div>

}

export default App

