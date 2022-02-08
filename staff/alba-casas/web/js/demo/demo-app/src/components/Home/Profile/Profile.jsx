/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Profile.css";

function Profile({ onUpdatePasswordClick, onDeletePasswordClick }) {
  return (
    <div className="profile">
      <form className="profile__form">
        <input
          className="profile__name-input"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="profile__surname-input"
          type="text"
          name="surname"
          placeholder="surname"
        />
        <input
          className="profile__email-input"
          type="email"
          name="email"
          placeholder="e-mail"
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
