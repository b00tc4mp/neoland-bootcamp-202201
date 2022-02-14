/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UpdatePassword.css";
import { useState } from "react";
import { updateUserPassword } from "../../../logic/logic/";
import Feedback from "../../Feedback/Feedback";
import PasswordInput from "../../PasswordInput/PasswordInput";

function UpdatePassword({ onProfile, token }) {
  const [feedBack, setFeedback] = useState();
  const [feedBackLevel, setFeedBackLevel] = useState();

  const updatePassword = (event) => {
    event.preventDefault();
    const {
      target: {
        currentPassword: { value: currPassword },
        newPassword: { value: password },
        retypePassword: { value: rePassword },
      },
    } = event;

    try {
      updateUserPassword(token, currPassword, password, rePassword)
        .then(() => {
          setFeedback("update password");
          setFeedBackLevel("success");
        })
        .catch((error) => {
          setFeedback(error.message);
          setFeedBackLevel("error");
        });
    } catch ({ message }) {
      setFeedback(message);
      setFeedBackLevel("error");
    }
  };

  return (
    <div className="update-password">
      <form className="update-password__form" onSubmit={updatePassword}>
        <label htmlFor="currPassword">Current password</label>
        <PasswordInput id="currPassword" name="currentPassword" />
        <label htmlFor="password">New password</label>
        <PasswordInput id="newPassword" name="newPassword" />
        <label htmlFor="confirmPassword">Confirm new password</label>
        <PasswordInput id="retypePassword" name="retypePassword" />
        <button>Update password</button>
        {feedBack && <Feedback message={feedBack} level={feedBackLevel} />}
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
