import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App() {
  const [view, setView] = useState("landing");
  const [token, setToken] = useState();

  const showLogin = () => setView("login");
  const showRegister = () => setView("register");

  const showHome = (token) => {
    setToken(token);
    setView("home");
  };

  const showLanding = () => {
    setView("landing");
  };

  return (
    <>
      {view === "landing" && (
        <Landing onLogin={showLogin} onRegister={showRegister} />
      )}
      {view === "login" && (
        <Login onAuthenticated={showHome} onRegister={showRegister} />
      )}
      {view === "register" && (
        <Register onLogin={showLogin} onRegistered={showLogin} />
      )}
      {view === "home" && <Home token={token} onLanding={showLanding} />}
    </>
  );
}  

export default App;
