import './App.css'
import { Register, Login, Home } from './components'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    // First validate token, if success go home '/' by default, if not, catch error and navigate('/login')

  },[])

  const showLogin = () => navigate('login')

  const keepTokenNShowHome = token => { // and = N
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('login')
  }

  return <div>
    <Routes>
      <Route path="/*" element={<Home onLogOut={deleteTokenNShowLanding}/>} />
      <Route path="register" element={<Register onRegistered={showLogin} />} />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome}/>} />
    </Routes>
  </div>
}

export default App