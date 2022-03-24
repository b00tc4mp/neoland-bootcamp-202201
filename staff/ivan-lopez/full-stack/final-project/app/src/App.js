import './App.sass';
import { Home, Results, Login, Register, Profile, UpdatePassword, DeleteAccount, ProductDetails } from './components'
import { Header } from './components/elements'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators} from 'commons'
import { useEffect } from 'react';
// import { IconLogo, IconProfile, IconCheeseburger } from './components/icons'
// import { Input } from './components/form-elements'

const { validateToken } = validators

function App() {

  // useEffect(() => {
  //   try {
  //     if(sessionStorage.token) validateToken(sessionStorage.token)
  //   } catch (error) {
  //     delete sessionStorage.token
  //     alert('La sesión ha caducado')
  //   }
  // }, [])

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
    {/* <Input type='password' name='password' placeholder='password' /> */}
    {/* <ProductDetails productId='6230bf4238c46a26fbfb31ad'/> */}
    {/* <Results /> */}



    <Header onLogo={showHome} onProfile={showProfile}/>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/iniciar-sesion' element={<Login onLogged={showHome} onRegister={showRegister} />} />
      <Route path='/registro' element={<Register onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path='/cuenta' element={sessionStorage.token ? <Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} onLogout={showLogin}/> : <Navigate replace to='/iniciar-sesion'/>} />
      <Route path='/cuenta/actualizar-contrasena' element={<UpdatePassword onBack={showProfile}/>} />
      <Route path='/cuenta/eliminar-cuenta' element={<DeleteAccount onDeletedAccount={showLogin} onBack={showProfile}/>} />
      {/* <Route path='/*' element={<Navigate replace to='/'/>} /> */}
    </Routes>
  </div>

}
export default App;