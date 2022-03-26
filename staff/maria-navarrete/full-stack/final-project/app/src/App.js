import './App.sass'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Header, NavigationBar } from './components'
import { validators } from 'commons'
import {
  Register,
  Login,
  Home,
  Profile,
  CreateAction,
  UpdateAction,
  ListFavoriteActions,
  Schedules,
  CreatedActions,
  Community,
  UserProfile,
  UpdateProfile,
  UpdatePassword,
  DeleteAccount,
  SearchUsers,
  CreateSchedule
} from './pages'
import { updateUserPassword } from './logic'
const { validateToken } = validators


const App = () => {

  const isTokenValid = () => {
    try {
      return sessionStorage.token && validateToken(sessionStorage.token)
    }
    catch (error) {
      alert(error.message)
      return false
    }
  }

  const goBack = () => navigate(-1)

  const navigate = useNavigate()

  const showHome = () => navigate('/')
  const showLogin = () => navigate('/ingresar')
  const showRegister = () => navigate('/registrar')

  const showNewSchedule = () => navigate('/agendar-accion')
  const showSchedules = () => navigate('/agenda')
  const showActs = () => navigate('/acciones')
  const showNewAct = () => navigate('/crear-accion')
  const showEditAct = () => navigate('/editar-accion')
  const showFavorites = () => navigate('/favoritas')
  const showCommunity = () => navigate('/communidad')
  const showFindUsers = () => navigate('/buscar-hoomans')
  const showUserProfile = () => navigate('/hooman')
  const showProfile = () => navigate('/perfil')
  const showUpdateProfile = () => navigate('/actualizar-perfil')
  const showUpdatePassword = () => navigate('/modificar-contraseña')
  const showDeleteAccount = () => navigate('/eliminar-cuenta')


  return <div>
    {isTokenValid() && <Header />}
    <Routes>
      <Route path='/' element={isTokenValid() ? <Home /> : <Navigate replace to='/ingresar' />} />
      <Route path='/ingresar' element={!isTokenValid() ? <Login goToHome={showHome} goToRegister={showRegister} /> : <Navigate replace to='/' />} />
      <Route path='/registrar' element={!isTokenValid() ? <Register goToLogin={showLogin} /> : <Navigate replace to='/' />} />


      <Route path='/agendar-accion' element={isTokenValid() ? <CreateSchedule /> : <Navigate replace to='/' />} />
      <Route path='/agenda' element={isTokenValid() ? <Schedules /> : <Navigate replace to='/' />} />
      <Route path='/acciones' element={isTokenValid() ? <CreatedActions /> : <Navigate replace to='/' />} />
      <Route path='/crear-accion' element={isTokenValid() ? <CreateAction /> : <Navigate replace to='/' />} />
      <Route path='/editar-accion' element={isTokenValid() ? <UpdateAction /> : <Navigate replace to='/' />} />
      <Route path='/favoritas' element={isTokenValid() ? <ListFavoriteActions /> : <Navigate replace to='/' />} />
      <Route path='/communidad' element={isTokenValid() ? <Community /> : <Navigate replace to='/' />} />
      <Route path='/buscar-hoomans' element={isTokenValid() ? <SearchUsers /> : <Navigate replace to='/' />} />
      <Route path='/hooman' element={isTokenValid() ? <UserProfile /> : <Navigate replace to='/' />} />
      <Route path='/perfil' element={isTokenValid() ? <Profile /> : <Navigate replace to='/' />} />
      <Route path='/actualizar-perfil' element={isTokenValid() ? <UpdateProfile /> : <Navigate replace to='/' />} />
      <Route path='/modificar-contraseña' element={isTokenValid() ? <UpdatePassword /> : <Navigate replace to='/' />} />
      <Route path='/eliminar-cuenta' element={isTokenValid() ? <DeleteAccount /> : <Navigate replace to='/' />} />


      <Route path="/404" element={<h1>Página no encontrada :(</h1>} />
      <Route path="/*" element={<Navigate replace to='/404' />} />
    </Routes>
    {isTokenValid() && <NavigationBar onHome={showHome} onActs={showSchedules} onCommunity={showCommunity} onProfile={showProfile} />}




  </div>

}



export default App