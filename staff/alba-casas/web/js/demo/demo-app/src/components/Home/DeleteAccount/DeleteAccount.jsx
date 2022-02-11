/* eslint-disable jsx-a11y/anchor-is-valid */
import "./DeleteAccount.css";
import unregisterUser from "../../../logic/logic/unregister-user";

function DeleteAccount({ onProfile, token, onLanding }) {
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
      alert(message);
    }
  };

  return (
    <div className="delete-account">
      <form className="delete-account__form" onSubmit={deleteAccount}>
        <input
          className="delete-account__password-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Delete account</button>

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
