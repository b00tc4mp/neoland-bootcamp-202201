import './App.css';
import Logo from './components/Logo'
import Add from './components/Add'
import Mul from './components/Mul'
import Div from './components/Div'
import Sub from './components/Sub'

function App() {
  return <div className="app">
    <Logo />
    <p>hola mundo</p>
    <Add />
    <Mul />
    <Div />
    <Sub />
  </div>
}

export default App