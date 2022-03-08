import './App.css'
import Logo from './components/Logo'
import Add from './components/Add'
import Div from './components/Div'
import Mul from './components/Mul'
import Sub from './components/Sub'
import Pow from './components/Pow'

function App() {
  return <>
    <div className="app">
      <Logo />
      <p>Hola Mundo</p>
      <Add />
      <Div />
      <Mul />
      <Sub />
      <Pow />
    </div>
  </>
}

export default App;
