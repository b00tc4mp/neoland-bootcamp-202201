/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Register.css";
import { registerUser } from "../../logic/logic";
import PasswordInput from "../PasswordInput/PasswordInput";

const Register = ({ onLogin, onRegistered }) => {
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
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register ">
      <form className="register__form" onSubmit={register}>
        <label htmlFor="name">name</label>
        <input className="register__name-input" type="text" name="name" />
        <label htmlFor="surname">Surname</label>
        <input className="register__surname-input" type="text" name="surname" />
        <label htmlFor="currPassword">Email</label>
        <input className="register__email-input" type="email" name="email" />
        <label htmlFor="Password">Password</label>
        <PasswordInput />
        <button>Register</button>
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
