import { useState } from 'react'

import Landing from './components/Landing'
import Login from './components/Login'


function App () {
  
  const [view, setView] = useState('login') // El primer parametro es el conteneedor de nuestro valor y el segundo es la funcion que setea dicho contenedor
  // const [token, setToken] = useState()

  // const showLogin = () => setView('login')

  // const showRegister = () => setView('register')

  // const showHome = token => {
  //   setToken(token)
  //   setView('home')
  // }

  return <>
  {/* {view === 'landing' && <Landing onLogin={showLogin} onRegister={showRegister} />}
  {view === 'login' && <Login onAuthenticated={showHome}onRegister={showRegister} />}
  {view === 'register' && <Register onLogin={showLogin} onRegistered={showLogin} />}
  {view === 'home' && <Home token={token} />}  */}
  {view === 'landing' && <Landing />}
  {view === 'login' && <Loginw />}
  {view === 'register' && <h1>hello register</h1>}
  </>
}

export default App