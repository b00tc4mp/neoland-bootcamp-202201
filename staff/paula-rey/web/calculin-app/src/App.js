import './App.css';
import Logo from './components/Logo'
import Add from './components/Add'
import Sub from './components/Sub'
import Mul from './components/Mul'
import Div from './components/Div'

function App() {
  return <div className="app">
    <Logo />
    <p>Welcome to calcul·lina!!</p>
    <Add />
    <Sub />
    <Mul />
    <Div />
  </div>
}

export default App


//ver version de Ventu