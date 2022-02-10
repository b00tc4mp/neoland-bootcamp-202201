import './App.css'
import Logo from './components/Logo'
import RandomYogui from './components/RandomYogui'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('landing')

  const showHome = () => setView('home')


  return <div className="app">
    <Logo />
    <RandomYogui />
    </div>
}

export default App