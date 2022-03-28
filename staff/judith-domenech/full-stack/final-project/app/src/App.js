import './App.sass'
import {
  SearchUserRacket,
  HeaderBar,
  NavigateMenu,

} from './components'

import {
  Register,
  Login,
  Home,
  Profile,
  Favorites,
  UpdatePassword,
  RacketDetails,
} from './pages'

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'

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
  const goBack = () => navigate(-1)
  const showLogin = () => navigate('acceder')
  const showRegister = () => navigate('registrar')
  const showSearch = query => { navigate(`search?query=${query}`) }
  const showRacketDetails = racketId => navigate(`pala/${racketId}`)
  const showProfile = () => navigate('perfil')
  const showFavorites = () => navigate('favoritos')
  const showSearchUserRacket = () => navigate('busca-tu-pala')
  const showUpdatePassword = () => navigate('cambiar-contrasena')
  const showHome = () => navigate('/')

  const goToProfile = event => {
    event.preventDefault()
    showProfile()
  }

  const goToFavorites = event => {
    event.preventDefault()
    showFavorites()
  }

  const goToHome = event => {
    event.preventDefault()
    showHome()
  }

  const goToLogin = event => {
    event.preventDefault()
    showLogin()
  }

  const goUpdatePassword = event => {
    showUpdatePassword()
  }


  return <div>

    <div className='home__header-bar'>
      {sessionStorage.token && <HeaderBar onHome={goToHome} onLogin={goToLogin} />}
    </div>
    <Routes>
      <Route path="/*" element={<Home onRegistered={showLogin} onLogin={showLogin} onProfile={showProfile} goToDetails={showRacketDetails} onSearch={showSearch}/> } />
      <Route path="registrar" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="acceder" element={!sessionStorage.token ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="perfil" element={sessionStorage.token && <Profile onUpdatePassword={goUpdatePassword} onLogout={showLogin}/>} />
      <Route path="cambiar-contrasena" element={sessionStorage.token && <UpdatePassword onBack={goBack} />} />
      <Route path="pala/:racketId" element={sessionStorage.token && <RacketDetails />} />
      <Route path="favoritos" element={sessionStorage.token && <Favorites goToDetails={showRacketDetails} />} />
      <Route path="busca-tu-pala" element={sessionStorage.token && <SearchUserRacket />} />
     
      <Route path="page-not-found" element={!sessionStorage.token ? <h1>Sorry, esta página no existe :P</h1> : <Navigate replace to="/" />} />
      <Route path="/*" element={<Navigate replace to='page-not-found' />} />

    </Routes>


    <div className='home__navigate-menu'>
      {sessionStorage.token && <NavigateMenu onProfile={goToProfile} onFavorites={goToFavorites} onSearchUserRacket={showSearchUserRacket} onHome={goToHome} />}
    </div>

  </div>

}

export default App
