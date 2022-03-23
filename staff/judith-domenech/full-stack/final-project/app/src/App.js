import './App.sass'
import { Register, Login, Home, Profile, RacketDetails, CreateComment, UpdatePassword } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'
import { IconFavorite } from './components/icons'
import Favorites from './components/Favorites'
import { RacketsCard } from './components/elements'
import Link from './components/elements/Link'
const { validateToken } = validators

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

  const keepTokenNShowHome = token => {
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }

  return <div>
    {/* <IconFavorite racketId={"6232266e2b6b26aac836b9a2"} isFavorite={false} /> */}
    {/* <Register />  */}
    {/* <Login />  */}
    {/*  <CreateComment racketId={"6232266e2b6b26aac836b9a2"}/> */}
    {/* <RacketDetails racketId="6232266e2b6b26aac836b9a2" /> */}
    {/* <Favorites></Favorites> */}
    {/* <Profile /> */}
    <Routes>
      {/* <Route path="/*" element={ <Home onLogOut={deleteTokenNShowLanding} onRegister={showLogin} onLogin={showLogin}/> } />
      <Route path="register" element={ <Register onRegistered={showLogin} onLogin={showLogin} /> } />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> } /> 
      <Route path="profile" element={<Profile />}></Route>
      <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} /> */}
    </Routes>
  </div>

}

export default App
