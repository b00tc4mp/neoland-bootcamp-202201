import "./App.css";
import Logo from "./components/Logo/Logo";
import RandomYogi from "./components/RandomYogi/RandomYogi";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Logo />
        <RandomYogi />
      </div>
      <Search />
    </div>
  );
}

export default App;
