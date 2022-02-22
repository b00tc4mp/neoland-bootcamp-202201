import './App.css';
import { randomYogui } from './logic'
import { randomZen } from './logic'
import { randomFortune } from './logic'
import Logo from './components/Logo'

function App() {
  return (
    <div className="app">
      <Logo />
      <h1 className="jonSnow">Jon Snow Cocaine</h1>
      <p>{randomYogui()}</p>
      <p>{randomZen()}</p>
      <p>{randomFortune()}</p>
      </div>
  )
}

export default App
