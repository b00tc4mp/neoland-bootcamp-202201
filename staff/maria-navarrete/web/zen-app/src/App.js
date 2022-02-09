import './App.css'
import {Logo, RandomFortune, RandomZen, RandomYogui} from './components'



function App() {
  return (
    <div className="app">
      <Logo/>
      <RandomYogui/>
      <RandomZen/>
      <RandomFortune/>
    </div>
  )
}

export default App
