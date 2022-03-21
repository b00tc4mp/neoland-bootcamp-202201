import './App.css';
import { Home, Login, Register, Profile, UpdatePassword, DeleteAccount, ProductDetails } from './components'
import { IconLogo, IconProfile, IconCheeseburger } from './components/icons'
import { Header } from './components/elements';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators} from 'commons'
import { useEffect } from 'react';
const { validateToken } = validators


function App() {

  useEffect(() => {
    try {
      if(sessionStorage.token) validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
      alert('La sesión ha caducado')
    }
  }, [])

  const navigate = useNavigate()

  const showHome = () => navigate('/')
  const showLogin = () => navigate('/iniciar-sesion')
  const showRegister = () => navigate('/registro')
  const showProfile = () => navigate('/cuenta')
  const showUpdatePassword = () => navigate('/cuenta/actualizar-contrasena')
  const showDeleteAccount = () => navigate('/cuenta/eliminar-cuenta')

  return <div>

    {/* <Login /> */}
    {/* <IconLogo /> */}
    {/* <IconProfile/> */}
    {/* <IconCheeseburger /> */}
    <ProductDetails productId='6230bf2238c46a26fbfb31aa'/>

{/* 
    <Routes>
      <Route path='/*' element={<Home onProfile={showProfile}/>} />
      <Route path='/iniciar-sesion' element={<Login onLogged={showHome} onRegistered={showRegister} />} />
      <Route path='/registro' element={<Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path='/cuenta' element={sessionStorage.token ? <Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} /> : <Navigate replace to='/iniciar-sesion'/>} />
      <Route path='/cuenta/actualizar-contrasena' element={<UpdatePassword onBack={showProfile}/>} />
      <Route path='/cuenta/eliminar-cuenta' element={<DeleteAccount onBack={showProfile}/>} />



    </Routes> */}
  </div>

}
export default App;