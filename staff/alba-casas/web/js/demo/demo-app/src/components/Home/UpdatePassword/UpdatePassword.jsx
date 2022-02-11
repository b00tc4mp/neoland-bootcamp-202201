/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UpdatePassword.css";
import { useState } from "react";
import { updateUserPassword } from "../../../logic/logic/";
import Feedback from "../../Feedback/Feedback";

function UpdatePassword({ onProfile, token }) {
  const [feedBack, setFeedback] = useState();

  const updatePassword = (event) => {
    debugger;
    event.preventDefault();
    const {
      target: {
        currentPassword: { value: currPassword },
        newPassword: { value: password },
        retypePassword: { value: rePassword },
      },
    } = event;

    try {
      updateUserPassword(token, currPassword, password, rePassword).then(() => {
        setFeedback("update password");
      });
    } catch ({ message }) {
      setFeedback(message);
    }
  };

  return (
    <div className="update-password">
      <form className="update-password__form" onSubmit={updatePassword}>
        <input
          className="update-password__curr-password-input"
          type="password"
          name="currentPassword"
          placeholder="Current password"
        />
        <input
          className="update-password__password-input"
          type="password"
          name="newPassword"
          placeholder="New password"
        />
        <input
          className="update-password__re-password-input"
          type="password"
          name="retypePassword"
          placeholder="Re-type new password"
        />
        <button>Update password</button>
        {feedBack && <Feedback message={feedBack} level="error" />}
        <a
          className="update-password__back-link"
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

export default UpdatePassword;
