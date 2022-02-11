/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Landing.css";

const Landing = ({ onLogin, onRegister }) => {
  const goLogin = (event) => {
    event.preventDefault();

    onLogin();
  };
  const goRegister = (event) => {
    event.preventDefault();
    onRegister();
  };

  return (
    <div className="landing">
      <div>
        <a className="landing__login" href="" onClick={goLogin}>
          Login
        </a>
        {" or "}
        <a className="landing__register" href="" onClick={goRegister}>
          Register
        </a>
      </div>
    </div>
  );
};

export default Landing;
