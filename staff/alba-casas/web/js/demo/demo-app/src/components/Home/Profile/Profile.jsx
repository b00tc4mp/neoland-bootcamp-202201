/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Profile.css";
import { useEffect } from "react";
import { retrieveUser, updateUser } from "../../../logic/logic";
import { useState } from "react";
import Feedback from "../../Feedback/Feedback";

function Profile({
  onUpdatePasswordClick,
  onDeletePasswordClick,
  token,
  refreshData,
}) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    try {
      retrieveUser(token).then(({ name, surname, email }) => {
        setName(name);
        setSurname(surname);
        setEmail(email);
      });
    } catch ({ message }) {
      alert(message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateProfile = (event) => {
    event.preventDefault();

    const {
      target: {
        name: { value: name },
        surname: { value: surname },
        email: { value: email },
      },
    } = event;
    try {
      updateUser(token, name, surname, email).then(() => {
        setName(name);
        setSurname(surname);
        setEmail(email);
        refreshData(name);
        setFeedback("profile updated");
      });
    } catch ({ message }) {
      setFeedback(message);
    }
  };

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={updateProfile}>
        <input
          className="profile__name-input"
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
        />
        <input
          className="profile__surname-input"
          type="text"
          name="surname"
          placeholder="surname"
          defaultValue={surname}
        />
        <input
          className="profile__email-input"
          type="email"
          name="email"
          placeholder="e-mail"
          defaultValue={email}
        />
        <button>Update profile</button>
        {feedback && <Feedback message={feedback} level="success" />}
        <a
          className="profile__update-password-link"
          href=""
          onClick={(event) => {
            onUpdatePasswordClick();
            event.preventDefault();
          }}
        >
          update password
        </a>

        <a
          className="profile__delete-account-link"
          href=""
          onClick={(event) => {
            onDeletePasswordClick();
            event.preventDefault();
          }}
        >
          delete account
        </a>
      </form>
    </div>
  );
}

export default Profile;
