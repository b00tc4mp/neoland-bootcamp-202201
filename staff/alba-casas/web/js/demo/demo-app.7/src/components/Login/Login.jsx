/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Login.css";
import { authenticateUser } from "../../logic/logic";
import { useState } from "react";

const Login = ({ onAuthenticated, onRegister }) => {
  const [emailFeedback, setEmailFeedback] = useState();
  const [passwordFeedback, setPasswordFeedback] = useState();
  const [feedback, setFeedback] = useState();

  const login = (event) => {
    event.preventDefault();
    const {
      target: {
        email: { value: email },
        password: { value: password },
      },
    } = event;

    try {
      authenticateUser(email, password)
        .then((token) => {
          onAuthenticated(token);
        })
        .catch((error) => {
          setEmailFeedback();
          setPasswordFeedback();
          setFeedback(error.message);
        });
    } catch (error) {
      const { message } = error;

      setFeedback();

      if (message.includes("email")) {
        setPasswordFeedback();
        setEmailFeedback(message);
      } else if (message.includes("password")) {
        setEmailFeedback();
        setPasswordFeedback(message);
      }
    }
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={login}>
        <input
          className={`login__email-input ${
            emailFeedback ? "login__input--error" : ""
          }`}
          type="email"
          name="email"
          placeholder="e-mail"
        />
        {emailFeedback && (
          <span className="login__email-feedback off">{emailFeedback}</span>
        )}

        <input
          className={`login__password-input ${
            passwordFeedback ? "login__input--error" : ""
          }`}
          type="password"
          name="password"
          placeholder="password"
        />
        {passwordFeedback && (
          <span className="login__password-feedback off">
            {passwordFeedback}
          </span>
        )}
        <button>Login</button>
        {feedback && <span className="login__feedback off">{feedback}</span>}
        <a
          className="login__register-link"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onRegister();
          }}
        >
          Register
        </a>
      </form>
    </div>
  );
};

export default Login;
