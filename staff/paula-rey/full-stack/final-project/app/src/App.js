import './App.sass'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Logo } from './components/elements'
import {
   Home, 
   Login, 
   Register, 
   Search, 
   Profile, 
   ListFavorites,  
   UserData, 
   ListLocations, 
   ListFollows, 
   DeleteAccount, 
   LocationDetails, 
   AddLocation 
} from './pages'
import { validators } from 'commons'
import { Header, ListSearchResults, LocationCard, NavigationMenu } from './components'
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
  const showSearch = () => navigate('/')
  const showLogin = () => navigate('/iniciar-sesion')
  const showRegister = () => navigate('/registro')
  const showProfile = () => navigate('/perfil')
  const showListFavorites = () => navigate('/localizaciones-favoritas')
  const showUserData = () => navigate('/datos-usuario')
  const showListLocations = () => navigate('/localizaciones-usuario')
  const showListFollows = () => navigate('/lista-seguidos')
  const showDeleteAccount = () => navigate('/borrar-cuenta')
  const showLocationDetails = () => navigate('/detalles-localizacion')

  return <div>
    
    {sessionStorage.token && isValidToken() && <Header onLogo={showHome} />}

    <Routes>
      <Route path="/" element={sessionStorage.token && isValidToken() ? <Home onLocationCard={showLocationDetails} /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/" element={sessionStorage.token && isValidToken() ? <Logo onLogo={showHome}/> : <Navigate replace to='/iniciar-sesion' /> }/>  
      <Route path="/iniciar-sesion" element={!sessionStorage.token ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to='/' /> }/>
      <Route path="/registro" element={!sessionStorage.token ? <Register onLogin={showLogin} onRegistered={showLogin} /> : <Navigate replace to='/' /> }/>
      
      <Route path="/resultado-busqueda" element={sessionStorage.token && isValidToken() ? <ListSearchResults onLocationCard={showLocationDetails}/> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/detalles-localizacion" element={sessionStorage.token && isValidToken() ? <LocationDetails /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/crear-localizacion" element={sessionStorage.token && isValidToken() ? <AddLocation /> : <Navigate replace to='/iniciar-sesion' /> }/>
 
      <Route path="/perfil" element={sessionStorage.token && isValidToken() ? <Profile onUserData={showUserData} onListLocations={showListLocations} onListFollows={showListFollows} onDeleteAccount={showDeleteAccount} /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/datos-usuario" element={sessionStorage.token && isValidToken() ? <UserData  /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/localizaciones-usuario" element={sessionStorage.token && isValidToken() ? <ListLocations /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/localizaciones-favoritas" element={sessionStorage.token && isValidToken() ? <ListFavorites onFavorites={showListFavorites}/> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/lista-seguidos" element={sessionStorage.token && isValidToken() ? <ListFollows /> : <Navigate replace to='/iniciar-sesion' /> }/>
      <Route path="/borrar-cuenta" element={sessionStorage.token && isValidToken() ? <DeleteAccount /> : <Navigate replace to='/iniciar-sesion' /> }/> 
      
      <Route path="/404" element={<h1>Page not found</h1>} />
      <Route path="/*" element={<Navigate replace to='/404' />} />
    </Routes>
    
    {sessionStorage.token && isValidToken() && <NavigationMenu onProfileIcon={showProfile} onFavoritesIcon={showListFavorites} onSearchLocationIcon={showHome}/>} 

  </div>

}

export default App

