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
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";
import {
  Routes,
  Route,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

function Home({ token, onLanding, onToggleTheme }) {
  const [view, setView] = useState("search");
  const [name, setName] = useState("name");
  const [vehicleId, setVehicleId] = useState();
  const [previousView, setPreviousView] = useState();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const q = search.get("q");
  const [query, setQuery] = useState(q);
  const location = useLocation();
  const [themeState, setThemeState] = useState("🌚");

  const showProfile = () => navigate("profile");
  const showUpdatePassword = () => navigate("profile/update-password");
  const showDeletePassword = () => navigate("profile/delete-account");
  const showSearch = () => navigate(!query ? "/" : `search?q=${query}`);
  const showFavs = () => navigate("favs");
  const showDetails = (id) => navigate(`vehicles/${id}`);
  const showCart = () => navigate("cart");
  const showOrders = () => navigate("orders");
  const goBackFromDetail = () => navigate(previousView || "/");

  const goToOrders = () => {
    showOrders();
  };
  const refreshData = (data) => setName(data);

  const goToDetail = (id) => {
    setVehicleId(id);
    setPreviousView(
      `${location.pathname}${location.search ? location.search : ""}`
    );
    showDetails(id);
  };

  const doSearch = (query) => {
    setQuery(query);

    navigate(`search?q=${query}`);
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

  const toggleTheme = () => {
    setThemeState(themeState === "🌚" ? "🌝" : "🌚");

    onToggleTheme();
  };

  return (
    <div className="home">
      <div className="home__header">
        <a
          className="home__home-link"
          title="Search"
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
          className={`home_menu-link ${
            view === "profile" ? "home__menu-link--active" : ""
          }`}
          href=""
          title="Profile"
          onClick={(event) => {
            event.preventDefault();

            showProfile();
          }}
        >
          Profile
        </a>
        <a
          className={`home_menu-link ${
            view === "favs" ? "home__menu-link--active" : ""
          }`}
          href=""
          onClick={(event) => {
            event.preventDefault();

            showFavs();
          }}
        >
          Favs
        </a>
        <a
          className={`home_menu-link ${
            view === "cart" ? "home__menu-link--active" : ""
          }`}
          href=""
          onClick={(event) => {
            event.preventDefault();

            showCart();
          }}
        >
          Cart
        </a>
        <a
          className={`home_menu-link ${
            view === "orders" ? "home__menu-link--active" : ""
          }`}
          href=""
          onClick={(event) => {
            event.preventDefault();

            showOrders();
          }}
        >
          Orders
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
        <button className="home__button" onClick={toggleTheme}>
          {themeState}
        </button>
      </div>

      <Routes>
        <Route
          path="vehicles/:vehicleId"
          element={
            <Details
              token={token}
              vehicleId={vehicleId}
              onBack={goBackFromDetail}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart token={token} onItem={goToDetail} onPlaceOrder={goToOrders} />
          }
        />
        <Route
          path="favs"
          element={<Favs token={token} onItem={goToDetail} />}
        />
        <Route
          index
          element={
            <Search
              token={token}
              onItem={goToDetail}
              onQuery={doSearch}
              query={query}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              token={token}
              onItem={goToDetail}
              onQuery={doSearch}
              query={query}
            />
          }
        />
        <Route
          path="profile"
          element={
            <Profile
              onUpdatePasswordClick={showUpdatePassword}
              onDeletePasswordClick={showDeletePassword}
              token={token}
              refreshData={refreshData}
            />
          }
        />
        <Route
          path="profile/update-password"
          element={<UpdatePassword onProfile={showProfile} token={token} />}
        />
        <Route
          path="profile/delete-account"
          element={
            <DeleteAccount
              onProfile={showProfile}
              token={token}
              onLanding={onLanding}
            />
          }
        />
        <Route path="orders" element={<Orders token={token} />} />
      </Routes>
    </div>
  );
}

export default Home;
