/* eslint-disable jsx-a11y/anchor-is-valid */
import "./DeleteAccount.css";

function DeleteAccount({ onProfile }) {
  return (
    <div className="delete-account">
      <form className="delete-account__form">
        <input
          className="delete-account__password-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Delete account</button>
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
