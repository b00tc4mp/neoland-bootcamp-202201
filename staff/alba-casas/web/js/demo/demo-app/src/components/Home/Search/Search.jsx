import { useState } from "react";
import searchVehicles from "../../../logic/logic/search-vehicle";
import Details from "./Details/Details";
import "./Search.css";

function Search() {
  const [vehicles, setVehicles] = useState([]);
  const [view, setView] = useState("results");
  const [vehicleId, setVehicleId] = useState();

  const showDetails = () => setView("details");

  const search = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    try {
      searchVehicles(query).then((vehicles) => setVehicles(vehicles));
    } catch ({ message }) {
      alert(message);
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={search}>
        <input
          className="search__query-input"
          type="text"
          name="query"
          placeholder="query"
        />
        <button>Search</button>
      </form>
      {/* doble negacion, consigue un valor booleano true o false, en este caso
        consigue un valor de false  */}
      {!!vehicles.length && view === "results" && (
        <ul className="search__results-list">
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <h2>{vehicle.name}</h2>
              <img
                src={vehicle.thumbnail}
                alt="vehicle"
                onClick={(event) => {
                  event.preventDefault();
                  setVehicleId(vehicle.id);
                  showDetails();
                }}
              />
              <span>{vehicle.price} $</span>
            </li>
          ))}
        </ul>
      )}
      {view === "details" && <Details vehicleId={vehicleId} />}
    </div>
  );
}

export default Search;
