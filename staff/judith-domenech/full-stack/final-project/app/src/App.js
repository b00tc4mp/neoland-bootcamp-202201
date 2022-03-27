import './App.sass'
import {
  ListFavoritesRackets,
  SearchUserRacket,
  HeaderBar,
  NavigateMenu
} from './components'

import {
  Register,
  Login,
  Home,
  Profile,
  Favorites
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
  const showLogin = () => navigate('login')
  const showRegister = () => navigate('register')
  const showProfile = () => navigate('profile')
  const showFavorites = () => navigate('favorites')
  const showSearchUserRacket = () =>navigate('search-your-racket')
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
  return <div>

    <div className='home__header-bar'>
      {sessionStorage.token && <HeaderBar onHome={goToHome} onLogin={goToLogin} />}
    </div>
    <Routes>
      <Route path="/" element={<Home onRegistered={showLogin} onLogin={showLogin} onProfile={showProfile} />} />
      <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="login" element={!sessionStorage.token ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="profile" element={sessionStorage.token && <Profile />} />
      <Route path="favorites" element={sessionStorage.token && <Favorites />} />
      <Route path="search-your-racket" element={sessionStorage.token && <SearchUserRacket  />} />
      <Route path="page-not-found" element={!sessionStorage.token ? <h1>Sorry, esta pag no existe :P</h1> : <Navigate replace to="/" />} />
      <Route path="/*" element={<Navigate replace to='page-not-found' />} />
      {/* <Route path='profile' element={<Profile />} />
      <Route path='favorites' element={<ListFavoritesRackets />} />
      <Route path='tu-pala' element={<SearchUserRacket />} />  */}
    </Routes>


    <div className='home__navigate-menu'>
      {sessionStorage.token && <NavigateMenu onProfile={goToProfile} onFavorites={goToFavorites} onSearchUserRacket={showSearchUserRacket} onHome={goToHome}/>}
    </div>

  </div>

}

export default App
