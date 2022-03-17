import './App.css';
import { Home, Login } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'



function App() {

    const navigate = useNavigate()

    const showLogin = () => navigate('login')
    const showRegister = () => navigate('register')

    const keepTokenNShowHome = token => {
      sessionStorage.token = token
      
      navigate('/')
    }
    

    return <div>

      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login onLogged={() => {}} onRegister={showRegister}/>} />
      </Routes>

    </div>
  }
export default App;
