import './App.css'
import { randomYogui } from './logic'


function App() {
  return <div className="app">
    <h1>hola mundo</h1>
    <p>{randomYogui()}</p>
  </div>
}

export default App
