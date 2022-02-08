/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Landing.css";

const Landing = ({ onLogin, onRegister }) => {
  return (
    <div className="landing">
      <div>
        <a
          className="landing__login"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onLogin();
          }}
        >
          Login
        </a>
        or
        <a
          className="landing__register"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onRegister();
          }}
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Landing;
