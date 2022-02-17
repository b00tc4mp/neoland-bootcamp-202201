/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import Profile from "./Profile/Profile";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import Search from "./Search/Search";
import { useState } from "react";
import { retrieveUser } from "../../logic/logic";
import { useEffect } from "react";
import Favs from "./Favs/Favs";
import Details from "./Search/Details/Details";

function Home({ token, onLanding }) {
  const [view, setView] = useState("search");
  const [name, setName] = useState("name");
  const [vehicleId, setVehicleId] = useState();
  const [query, setQuery] = useState();
  const [previousView, setPreviousView] = useState();

  const showProfile = () => setView("profile");
  const showUpdatePassword = () => setView("update-password");
  const showDeletePassword = () => setView("delete-account");
  const showSearch = () => setView("search");
  const showFavs = () => setView("favs");
  const showDetails = () => setView("details");
  const goBackFromDetail = () => setView(previousView);

  const refreshData = (data) => setName(data);

  const goToDetail = (id) => {
    setVehicleId(id);
    setPreviousView(view);
    showDetails();
  };

  useEffect(() => {
    try {
      retrieveUser(token)
        .then((user) => setName(user.name))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <a
          className="home__home-link"
          href=""
          onClick={(event) => {
            event.preventDefault();
            showSearch();
          }}
        >
          <img className="home__logo" src="images/demo-logo.png" alt="" />
        </a>
        <h1 className="home__user">{name}</h1>
        <a
          className="home__profile-link"
          href=""
          onClick={(event) => {
            event.preventDefault();

            showProfile();
          }}
        >
          Profile
        </a>
        <a
          className="home__profile-favs"
          href=""
          onClick={(event) => {
            event.preventDefault();

            showFavs();
          }}
        >
          Favs
        </a>
        <button
          className="home__logout-button"
          onClick={(event) => {
            event.preventDefault();

            onLanding();
          }}
        >
          Logout
        </button>
      </div>

      {view === "details" && (
        <Details
          token={token}
          vehicleId={vehicleId}
          onBack={goBackFromDetail}
        />
      )}

      {view === "favs" && <Favs token={token} onItem={goToDetail} />}
      {view === "search" && (
        <Search
          token={token}
          onItem={goToDetail}
          onQuery={setQuery}
          query={query}
        />
      )}
      {view === "profile" && (
        <Profile
          onUpdatePasswordClick={showUpdatePassword}
          onDeletePasswordClick={showDeletePassword}
          token={token}
          refreshData={refreshData}
        />
      )}
      {view === "update-password" && (
        <UpdatePassword onProfile={showProfile} token={token} />
      )}
      {view === "delete-account" && (
        <DeleteAccount
          onProfile={showProfile}
          token={token}
          onLanding={onLanding}
        />
      )}
    </div>
  );
}

export default Home;
