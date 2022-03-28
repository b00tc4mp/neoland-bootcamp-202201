import './App.sass'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
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
  Users,
  CreateSchedule
} from './pages'

const { validateToken } = validators


const App = () => {

  const isTokenValid = () => {
    try {
      return sessionStorage.token && validateToken(sessionStorage.token)
    }
    catch (error) {
      alert('La sesión ha caducado')
      delete sessionStorage.token
      return false
    }
  }

  const goBack = () => navigate(-1)

  const navigate = useNavigate()

  const showHome = () => navigate('/')
  const showSearchActions = ({ query, requiredTime, requiredBudget }) => { navigate(`/search?${query !== null ? `query=${query}` : ''}&${requiredTime !== null ? `requiredTime=${requiredTime}` : ''}&${requiredBudget !== null ? `requiredBudget=${requiredBudget}` : ''}`) }
  const showLogin = () => navigate('/ingresar')
  const showRegister = () => navigate('/registrar')
  const showCreateSchedule = actionId => navigate(`/agendar-accion/${actionId}`)
  const showSchedules = () => navigate('/agenda')
  const showActions = () => navigate('/acciones')
  const showCreateAction = () => navigate('/crear-accion')
  const showEditAction = actionId => navigate(`/editar-accion/${actionId}`)
  const showFavorites = () => navigate('/favoritas')
  const showCommunity = () => navigate('/communidad')
  const showUsers = () => navigate('/hoomans')
  const showSearchUsers = query => { navigate(`/hoomans/search?query=${query}`) }
  const showUserProfile = userId => navigate(`/hooman/${userId}`)
  const showProfile = () => navigate('/perfil')
  const showUpdateProfile = () => navigate('/actualizar-perfil')
  const showUpdatePassword = () => navigate('/modificar-contraseña')
  const showDeleteAccount = () => navigate('/eliminar-cuenta')



  return <div>
    {isTokenValid() && <Header onLogo={showHome} />}
    <Routes>
      <Route path='/*' element={isTokenValid() ? <Home onSearchActions={showSearchActions} goToCreateSchedule={showCreateSchedule} goToUserProfile={showUserProfile} /> : <Navigate replace to='/ingresar' />} />
      <Route path='/ingresar' element={!isTokenValid() ? <Login goToHome={showHome} onRegister={showRegister} /> : <Navigate replace to='/' />} />
      <Route path='/registrar' element={!isTokenValid() ? <Register goToLogin={showLogin} onLogin={showLogin} /> : <Navigate replace to='/' />} />
      <Route path='/crear-accion' element={isTokenValid() ? <CreateAction goBack={goBack} onSchedules={showSchedules} onCreatedActions={showActions} onFavorites={showFavorites} /> : <Navigate replace to='/' />} />
      <Route path='/agendar-accion/:actionId' element={isTokenValid() ? <CreateSchedule goBack={goBack} /> : <Navigate replace to='/' />} />
      <Route path='/eliminar-cuenta' element={isTokenValid() ? <DeleteAccount goToLogin={showLogin} /> : <Navigate replace to='/' />} />
      <Route path='/acciones' element={isTokenValid() ? <CreatedActions onSchedules={showSchedules} onCreatedActions={showActions} onFavorites={showFavorites} onCreateAction={showCreateAction} goToCreateSchedule={showCreateSchedule} goToEditAction={showEditAction} /> : <Navigate replace to='/' />} />
      <Route path='/communidad' element={isTokenValid() ? <Community goToUserProfile={showUserProfile} onUsers={showUsers} /> : <Navigate replace to='/' />} />
      <Route path='/favoritas' element={isTokenValid() ? <ListFavoriteActions onSchedules={showSchedules} onCreatedActions={showActions} onFavorites={showFavorites} goToCreateSchedule={showCreateSchedule} goToUserProfile={showUserProfile} /> : <Navigate replace to='/' />} />
      <Route path='/agenda' element={isTokenValid() ? <Schedules onSchedules={showSchedules} onCreatedActions={showActions} onFavorites={showFavorites} /> : <Navigate replace to='/' />} />
      <Route path='/editar-accion/:actionId' element={isTokenValid() ? <UpdateAction onSchedules={showSchedules} onCreatedActions={showActions} onFavorites={showFavorites} /> : <Navigate replace to='/' />} />
      <Route path='/perfil' element={isTokenValid() ? <Profile onUpdateProfile={showUpdateProfile} onLogout={showLogin} /> : <Navigate replace to='/' />} />
      <Route path='/modificar-contraseña' element={isTokenValid() ? <UpdatePassword goToProfile={showProfile} /> : <Navigate replace to='/' />} />
      <Route path='/actualizar-perfil' element={isTokenValid() ? <UpdateProfile goToProfile={showProfile} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} /> : <Navigate replace to='/' />} />
      <Route path='/hooman/:userId' element={isTokenValid() ? <UserProfile goToCreateSchedule={showCreateSchedule} goToUserProfile={showUserProfile} /> : <Navigate replace to='/' />} />
      <Route path='/hoomans*' element={isTokenValid() ? <Users onSearchUsers={showSearchUsers} goToUserProfile={showUserProfile} /> : <Navigate replace to='/' />} />

      <Route path="/404" element={<h1>Página no encontrada :(</h1>} />
      <Route path="*" element={<Navigate replace to='/404' />} />
    </Routes>
    {isTokenValid() && <NavigationBar onHome={showHome} onSchedules={showSchedules} onCommunity={showCommunity} onProfile={showProfile} />}




  </div>

}



export default App