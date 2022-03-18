import './App.css';
import { Home, Login, Register, Profile } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators} from 'commons'
import { useEffect } from 'react';
const { validateToken } = validators


function App() {

  useEffect(() => {
    try {
      if(sessionStorage.token) validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
      alert('La sesión ha caducado')
    }
  }, [])

  const navigate = useNavigate()

  const showHome = () => navigate('/')
  const showLogin = () => navigate('iniciar-sesion')
  const showRegister = () => navigate('registro')
  const showProfile = () => navigate('cuenta')

  return <div>

    <Routes>
      <Route path='/*' element={<Home onProfile={showProfile}/>} />
      <Route path='/iniciar-sesion' element={<Login onLogged={showHome} onRegistered={showRegister} />} />
      <Route path='/registro' element={<Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path='/cuenta' element={sessionStorage.token ? <Profile onProfile={showProfile} /> : <Navigate replace to='/iniciar-sesion'/>} />
    </Routes>

  </div>
}
export default App;