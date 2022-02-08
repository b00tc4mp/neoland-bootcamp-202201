/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import Profile from "../Profile/Profile";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import DeleteAccount from "../DeleteAccount/DeleteAccount";
import Search from "../Search/Search";
import { useState } from "react";
import { retrieveUser } from "../../logic/logic";
import { useEffect } from "react";

function Home({ token }) {
  const [view, setView] = useState("search");
  const [name, setName] = useState("name");

  useEffect(() => {
    try {
      retrieveUser(token)
        .then((user) => setName(user.name))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <a className="home__home-link" href="">
          <img className="home__logo" src="images/demo-logo.png" alt="" />
        </a>
        <h1 className="home__user">{name}</h1>
        <a className="home__profile-link" href="">
          Profile
        </a>
        <button className="home__logout-button">Logout</button>
      </div>

      {view === "search" && <Search />}
      {view === "profile" && <Profile />}
      {view === "update-password" && <UpdatePassword />}
      {view === "delete-account" && <DeleteAccount />}
    </div>
  );
}

export default Home;
