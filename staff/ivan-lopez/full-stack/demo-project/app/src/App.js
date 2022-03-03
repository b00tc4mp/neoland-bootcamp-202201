import './App.css';
import { Register, Login, Home } from './components'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { validateToken } from 'commons';

function App() {
  const navigate = useNavigate()

  // useEffect(() => {
  //   //llamar validateToken y poner Try and catch
  //   validateToken()
  //   try {
      
  //   } catch (error) {
      
  //   }
  // })

  const showLogin = () => navigate('login')

  const keepTokenNShowHome = token => {
    sessionStorage.token = token

    navigate('/')
  }

  return <div>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="register" element={<Register onRegistered={showLogin} />} />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} />} />
    </Routes>
  </div>
    
}

export default App