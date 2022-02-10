/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Profile.css";
import { useEffect } from "react";
import { retrieveUser, updateUser } from "../../../logic/logic";
import { useState } from "react";

function Profile({
  onUpdatePasswordClick,
  onDeletePasswordClick,
  token,
  refreshData,
}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    /*   const {
      target: { value: name },
    } = event; */

    /* const { value: name } = event.target; */

    setName(event.target.value);
  };

  const handleChangeSurname = (event) => {
    /*   const {
      target: { value: surname },
    } = event; */
    /* const { value: surname } = event.target; */

    setSurname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    /*  const {
      target: { value: email },
    } = event; */
    /*  const { value: email } = event.target; */

    setEmail(event.target.value);
  };

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
      });
    } catch ({ message }) {
      alert(message);
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
          value={name}
          onChange={handleChangeName}
        />
        <input
          className="profile__surname-input"
          type="text"
          name="surname"
          placeholder="surname"
          value={surname}
          onChange={handleChangeSurname}
        />
        <input
          className="profile__email-input"
          type="email"
          name="email"
          placeholder="e-mail"
          value={email}
          onChange={handleChangeEmail}
        />
        <button>Update profile</button>
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

// Cuando tu recuperas los datos debes guardarlos en un state y renderizar el compo solo si ese state no es undefined
