import './App.css'
import { Register, Login, Home, DeleteAccount } from './components'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const showLogin = () => navigate('login')
  const showHome = () => navigate('/')

  const keepTokenNShowHome = token => {
    sessionStorage.token = token

    navigate('/')
  }

  return <div>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="register" element={<Register onRegistered={showLogin} />} />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} />} />
      <Route path="delete-account" element={<DeleteAccount onBack={showHome} onDeletedAccount={showLogin}/>} />
    </Routes>
  </div>
}

export default App
