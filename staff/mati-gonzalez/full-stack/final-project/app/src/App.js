import './App.css'
import { Details } from './components'
import { Header } from './components/elements'
import { IconLogo } from './components/icons'
import { IconProfile } from './components/icons'
import { Register, Login, Home } from './components'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const keepTokenNShowHome = token => {
    sessionStorage.token = token

    navigate('/')
  }

  return <div>
    {/* <Header/> */}
    <Details/>
    {/* <IconHambelgue/> */}
    {/* <IconProfile/> */}
    {/* <IconLogo/> */}
    {/* <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="register" element={<Register onRegistered={showLogin} />} />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} />} />
    </Routes> */}
  </div>
}

export default App