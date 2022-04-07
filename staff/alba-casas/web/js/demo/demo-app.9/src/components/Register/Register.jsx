/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Register.css";
import { registerUser } from "../../logic/logic";
import PasswordInput from "../PasswordInput/PasswordInput";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";

const Register = ({ onLogin, onRegistered }) => {
  const [feedback, setFeedback] = useState();
  const [nameFeedback, setNameFeedback] = useState();
  const [surnameFeedback, setSurnameFeedback] = useState();
  const [emailFeedback, setEmailFeedback] = useState();
  const [passwordFeedback, setPasswordFeedback] = useState();

  const register = (event) => {
    event.preventDefault();

    const {
      target: {
        name: { value: name },
        surname: { value: surname },
        email: { value: email },
        password: { value: password },
      },
    } = event;

    try {
      registerUser(name, surname, email, password)
        .then(() => onRegistered())
        .catch((error) => {
          setNameFeedback();
          setSurnameFeedback();
          setEmailFeedback();
          setPasswordFeedback();
          setFeedback(error.message);
        });
    } catch ({ message }) {
      setFeedback();

      if (message.includes("surname")) {
        setNameFeedback();
        setSurnameFeedback(message);
        setEmailFeedback();
        setPasswordFeedback();
      } else if (message.includes("name")) {
        setNameFeedback(message);
        setSurnameFeedback();
        setEmailFeedback();
        setPasswordFeedback();
      } else if (message.includes("email")) {
        setNameFeedback();
        setSurnameFeedback();
        setEmailFeedback(message);
        setPasswordFeedback();
      } else if (message.includes("password")) {
        setNameFeedback();
        setSurnameFeedback();
        setEmailFeedback();
        setPasswordFeedback(message);
      } else {
        setFeedback(message);
        setNameFeedback();
        setSurnameFeedback();
        setEmailFeedback();
        setPasswordFeedback();
      }
    }
  };

  return (
    <div className="register ">
      <form className="register__form" onSubmit={register}>
        <label htmlFor="name">Name</label>
        <input
          className={`register__name-input ${
            nameFeedback ? "register__input--error" : ""
          }`}
          type="text"
          name="name"
        />
        {nameFeedback && (
          <Feedback message={nameFeedback} level="error" version="mini" />
        )}
        <label htmlFor="surname">Surname</label>
        <input
          className={`register__surname-input ${
            surnameFeedback ? "register__input--error" : ""
          }`}
          type="text"
          name="surname"
        />
        {surnameFeedback && (
          <Feedback message={surnameFeedback} level="error" version="mini" />
        )}
        <label htmlFor="currPassword">Email</label>
        <input
          className={`register__email-input ${
            emailFeedback ? "register__input--error" : ""
          }`}
          type="email"
          name="email"
        />
        {emailFeedback && (
          <Feedback message={emailFeedback} level="error" version="mini" />
        )}
        <label htmlFor="Password">Password</label>
        <PasswordInput passwordFeedback={passwordFeedback} className />

        <button>Register</button>
        {feedback && <Feedback message={feedback} level="error" />}
        <a
          className="register__login-link"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onLogin();
          }}
        >
          Login
        </a>
      </form>
    </div>
  );
};

export default Register;
