import './App.sass';
import { Home, Login, Register, Profile, UpdatePassword, DeleteAccount, ProductDetails } from './components'
import { Header } from './components/elements'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import { validators} from 'commons'


// const { validateToken } = validators

function App() {

  const navigate = useNavigate()

  const goToBack = () => navigate(-1)
  const showHome = () => navigate('/')
  const showLogin = () => navigate('/iniciar-sesion')
  const showRegister = () => navigate('/registro')
  const showProfile = () => navigate('/cuenta')
  const showUpdatePassword = () => navigate('/cuenta/actualizar-contrasena')
  const showDeleteAccount = () => navigate('/cuenta/eliminar-cuenta')


  return <div>

    <Header onLogo={showHome} onProfile={showProfile}/>
    <Routes>
      <Route path='/*' element={<Home onBack={goToBack} />} />
      <Route path='/iniciar-sesion' element={<Login onLogged={showHome} onRegister={showRegister} />} />
      <Route path='/registro' element={<Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path='/cuenta' element={sessionStorage.token ? <Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogout={showLogin}/> : <Navigate replace to='/iniciar-sesion'/>} />
      <Route path='/cuenta/actualizar-contrasena' element={<UpdatePassword  onBack={goToBack} />} />
      <Route path='/cuenta/eliminar-cuenta' element={<DeleteAccount onDeletedAccount={showLogin}  onBack={goToBack} />} />
    </Routes>
  </div>

}

export default App;