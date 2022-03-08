import './App.css'
import { Landing, Register, Login, Home } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators} from 'commons'
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
    <Routes>
      <Route path="/*" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="/login" element={!sessionStorage.token ? <Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
    </Routes>
  </div>

}

export default App
