/* eslint-disable jsx-a11y/anchor-is-valid */
import "./DeleteAccount.css";
import unregisterUser from "../../../logic/logic/unregister-user";
import { useState } from "react";
import Feedback from "../../Feedback/Feedback";
import PasswordInput from "../../PasswordInput/PasswordInput";

function DeleteAccount({ onProfile, token, onLanding }) {
  const [feedBack, setFeedback] = useState();
  const [feedBackLevel, setFeedBackLevel] = useState();

  const deleteAccount = (event) => {
    event.preventDefault();
    const {
      target: {
        password: { value: password },
      },
    } = event;
    try {
      unregisterUser(token, password);
      alert("deleted user");
      onLanding();
    } catch ({ message }) {
      setFeedback(message);
      setFeedBackLevel("error");
    }
  };

  return (
    <div className="delete-account">
      <form
        className="delete-account__form"
        onSubmit={deleteAccount}
        method="post"
      >
        <label htmlFor="password">Password</label>
        <PasswordInput />
        <button type="submit">Delete account</button>
        {feedBack && <Feedback message={feedBack} level={feedBackLevel} />}

        <a
          className="delete-account__back-link"
          href=""
          onClick={(event) => {
            event.preventDefault();

            onProfile();
          }}
        >
          back
        </a>
      </form>
    </div>
  );
}

export default DeleteAccount;
