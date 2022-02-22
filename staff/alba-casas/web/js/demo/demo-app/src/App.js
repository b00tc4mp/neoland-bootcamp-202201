import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState(sessionStorage.token);
  const navigate = useNavigate();

  const showLogin = () => navigate("login");
  const showRegister = () => navigate("register");

  const showHome = (token) => {
    sessionStorage.token = token;
    setToken(token);
    navigate("/");
  };

  const showLanding = () => {
    delete sessionStorage.token;
    setToken();
  };

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            token ? (
              <Home token={token} onLanding={showLanding} />
            ) : (
              <Landing onLogin={showLogin} onRegister={showRegister} />
            )
          }
        />
        <Route
          path="login"
          element={
            !token ? (
              <Login onAuthenticated={showHome} onRegister={showRegister} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="register"
          element={
            !token ? (
              <Register onLogin={showLogin} onRegistered={showLogin} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="*"
          element={
            !token ? (
              <h1>Sorry, this path does not exist :P</h1>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
