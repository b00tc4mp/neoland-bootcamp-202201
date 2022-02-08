/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UpdatePassword.css";

function UpdatePassword({ onProfile }) {
  return (
    <div className="update-password">
      <form className="update-password__form">
        <input
          className="update-password__curr-password-input"
          type="password"
          name="name"
          placeholder="Current password"
        />
        <input
          className="update-password__password-input"
          type="password"
          name="surname"
          placeholder="New password"
        />
        <input
          className="update-password__re-password-input"
          type="password"
          name="email"
          placeholder="Re-type new password"
        />
        <button>Update password</button>
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
