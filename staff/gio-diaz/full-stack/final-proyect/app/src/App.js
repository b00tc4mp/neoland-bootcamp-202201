import './App.css'
import  Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const showHome = () => navigate('home')
  
  const keepTokenNShowHome = token => {
    sessionStorage.token = token

    navigate('/')
  } 

  return <div>
    <Routes>
      <Route path="/*" element={<Landing onLogin={showLogin} onRegister={showRegister}/> } />
      <Route path="/login" element={<Login onHome={showHome} onRegister={showRegister} onLoggedIn={showHome}/>}/>
      <Route path="/register" element={<Register onLogin={showLogin} onRegistered={showLogin}/>}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </div>
}

export default App