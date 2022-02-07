import './App.css';
import Logo from './components/Logo'
import Add from './components/Add'
import Sub from './components/Sub'
import Mul from './components/Mul'
import Div from './components/Div'
import Pow from './components/Pow'
import Rem from './components/Rem'

function App() {
  return <div className="app">
    <Logo />
    <Add />
    <Sub />
    <Mul />
    <Div />
    <Pow />
    <Rem />
  </div>
}

export default App