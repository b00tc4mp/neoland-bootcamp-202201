import "./App.css";
import Logo from "./components/Logo/Logo";
import Add from "./components/Add/Add";
import Mul from "./components/Mul/Mul";
import Subs from "./components/Subs/Subs";
import Division from "./components/Division/Division";
import Power from "./components/Power/Power";

function App() {
  return (
    <div className="app">
      <Logo />
      <p>Hola Mundo!</p>
      <Add />
      <Mul />
      <Subs />
      <Division />
      <Power />
    </div>
  );
}

export default App;
