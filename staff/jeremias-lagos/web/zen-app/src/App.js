import './App.css';
import { randomYogui } from './logic'
import Logo from './components/Logo'


function App() {
  return <div className="app">
    <p>{randomYogui()}</p>
  </div>
}

export default App;
