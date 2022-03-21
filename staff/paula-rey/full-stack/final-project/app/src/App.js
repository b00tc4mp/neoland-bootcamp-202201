import './App.sass'
import { Landing, Register, Login, Home, Details, AddLocation } from './components'
import { IconFavorite, IconFollow } from './components/icons'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'

const {validateToken } = validators

function App() {
  let tokenValid = true

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    tokenValid = false
  }

  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenNShowHome = token => { // and = N
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }


  return <div>
    <AddLocation/>
    {/* <Details locationId="62336941e973046272784a55"/> */}
    {/* <IconFavorite locationId={"62336941e973046272784a55"} isFavorite={false}/> */}
    {/* <IconFollow userId={"62336941e973046272784a49"} isFollow={false}/> */}
  </div>

}

export default App


{/* <Routes>
  <Route path="/*" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Landing onLogin={showLogin} onRegistered={showRegister} />} />
  <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
  <Route path="/login" element={!sessionStorage.token ? <Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
  <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
</Routes> */}