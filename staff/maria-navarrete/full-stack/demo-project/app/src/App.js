import './App.css'
import { Landing, Register, Login, Home } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  const showLogIn = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenNShowHome = token => {
    sessionStorage.token = token

    navigate('/')
  }

  const logout = () => {
    sessionStorage.token = ""
  }

  return <div>
    <Routes>
      <Route path="/*" element={sessionStorage.token ? <Home onLogout={logout} /> : <Landing onLogin={showLogIn} onRegistered={showRegister} />} />
      <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogIn} onLogin={showLogIn} /> : <Navigate replace to="/" />} />
      <Route path="/login" element={!sessionStorage.token ? <Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
    </Routes>
  </div>
}

export default App
