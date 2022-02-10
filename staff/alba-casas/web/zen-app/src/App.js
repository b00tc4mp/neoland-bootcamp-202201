import { useState } from "react";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";

function App() {
  const [view, setView] = useState("landing");

  const showHome = () => setView("home");

  return (
    <>
      {view === "landing" && <Landing onEnter={showHome} />}
      {view === "home" && <Home />}
    </>
  );
}

export default App;
