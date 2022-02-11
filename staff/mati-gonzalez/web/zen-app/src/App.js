import Landing from './components/Landing'
import Home from './components/Home' 
import { useState } from 'react'

function App() {
  const [view, setView] = useState ('landing')

  const showHome = () => setView('home') 

  return <>
    
      {view === 'landing' && <Landing onEnter={showHome} />}
      {view === 'home' && <Home />}
      </>
}

export default App
